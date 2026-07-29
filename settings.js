const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")
 
global.owner = '62xxxx' // setting agar kode masuk
global.versi = version
global.namaOwner = "your name"
global.botname = 'whatsapp bot'
global.botname2 = 'whatsapp bot'

global.packname = 'your'
global.author = 'your' 


global.linkOwner = "https://wa.me/62"
global.linkWebsite = "https://whatsapp.com"
global.linkGrup = "https://whatsapp.com/channel/"

global.linkSaluran = "https://whatsapp.com/channel/"
global.idSaluran = "@newsletter"
global.namaSaluran = "your name"

global.image = {
menu: "https://njy.my.id/files/lxz.jpg", 
reply: "https://njy.my.id/files/lxz.jpg", 
logo: "https://njy.my.id/files/lxz.jpg", 
}

global.systemN = "sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ"
global.mess = {
    regis : "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ",
    creator: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋʜᴜsᴜs ᴏᴡɴᴇʀ",
	owner: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋʜᴜsᴜs ᴏᴡɴᴇʀ",
	admin: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nғɪᴛᴜʀ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ",
	botAdmin: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nʙᴏᴛ ʜᴀʀᴜs ᴀᴅᴍɪɴ",
	group: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nғɪᴛᴜʀ ɴʏᴀ ᴋʜᴜsᴜs ᴅɪ ɢʀᴏᴜᴘ",
	private: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nғɪᴛᴜʀ ɴʏᴀ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ",
    bot : "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴏɴʟʏ ʙᴏᴛ ᴜsᴇʀ",
	prem: "*[ sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ ]*\nᴋʜᴜsᴜs ᴘʀᴇᴍɪᴜᴍ",
	wait: 'ᴡᴀɪᴛɪɴɢ ⏳',
	error: 'ERROR❗',
	done: 'ᴅᴏɴᴇ ✅'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
