global.owner = ['6281333154367']  
global.mods = ['6282220618853'] 
global.prems = ['6282220618853']
global.nameowner = 'zall'
global.numberowner = '6281333154367' 
global.mail = 'payahhawok@gmail.com' 
global.gc = 'https://chat.whatsapp.com/'
global.instagram = 'https://instagram.com/zallzall02'
global.wm = 'FLIX BOT AI PLUGINS'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '3' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'raffxsukatobrut' // Udah Free Dari Gw Jangan Di Ubah Tar Error

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'btzraffxzer' // Free jan di ubah tar error
global.APIs = {   

  btc: 'https://api.botcahx.eu.org'

}

global.APIKeys = { 

  'https://api.botcahx.eu.org': 'raffxsukatobrut' 

}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
