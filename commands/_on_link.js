/*CMD
  command: /on_link
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){

Bot.runCommand("🔙 Kembali")
return
}

var msg = data.message


if(msg.slice(0, 7)=="BTC-IDR"){

User.setProperty("voucher_gopay", msg,"string")
Bot.sendMessage("`Loading data...`")
Bot.runCommand("/voucher_link")
return

}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf Voucher yang anda masukan salah",{on_result:"/otw"})

