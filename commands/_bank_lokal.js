/*CMD
  command: /bank_lokal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){

Bot.runCommand("/start")

return
}

var msg = data.message
//var sear = msg.slice(1,3)

if(msg.slice(0, 7)=="BTC-IDR"){

User.setProperty("voucher_bank", msg,"string")

Bot.runCommand("/voucher_bank")
return

}

Bot.sendMessage("Mohon maaf Voucher yang anda masukan salah")

