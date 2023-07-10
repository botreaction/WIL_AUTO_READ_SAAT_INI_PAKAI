const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6289688206739@s.whatsapp.net"]
global.nomerOwner = "6289688206739"
global.nomorOwner = ['6289688206739']
global.namaDeveloper = "ZiroBotz-MD"
global.namaBot = "ZiroBotz WhatsApp"
global.packname = ""
global.author = "Sticker By ZiroBOTz"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/