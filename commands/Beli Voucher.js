/*CMD
  command: Beli Voucher
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
let time = Libs.DateTimeFormat.format(date, "HHmm" )

var date_ = Libs.DateTimeFormat.format(date, "dd-mm-yyyy HH:MM:ss" )
var id = parseInt(time)


if(id>2100){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf layanan ini hanya tersedia pukul 08.00 WIB s.d 21.00 WIB")
return
}

if(id<800){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf layanan ini hanya tersedia pukul 08.00 WIB s.d 21.00 WIB")
return
}
Bot.runCommand("/buy_voucher")
return
