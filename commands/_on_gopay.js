/*CMD
  command: /on_gopay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

if(message=="🔙 Kembali"){

Bot.runCommand("Jual Voucher")
return
}

var msg = data.message
//var sear = msg.slice(1,3)

if(msg.slice(0, 7)=="BTC-IDR"){

User.setProperty("voucher_gopay", msg,"string")
Bot.sendMessage("`Loading data...`")
Bot.runCommand("/voucher_gopay")
return

}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf Voucher yang anda masukan salah",{on_result:"/otw"})


