/*CMD
  command: /on_ovo
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
Bot.runCommand("/edit_params")
return
}

var msg = data.message
//var sear = msg.slice(1,3)

if(msg.slice(0, 7)=="BTC-IDR"){

User.setProperty("voucher_ovo", msg,"string")
Bot.sendMessage("`Procesing...`")
Bot.runCommand("/voucher_ovo")
return

}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf Voucher yang anda masukan salah!",{on_result:"/otw"})
return

