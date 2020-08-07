/*CMD
  command: /on_deposit_voucher
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 

if(message=="🔙 Kembali"){
Bot.runCommand("/start")
return
}

if(message.slice(0, 7)=="BTC-IDR"){

User.setProperty("voucher_indodax_deposit",data.message,"string")

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

Bot.sendMessage("`Procesing...`")

Bot.runCommand("/claim_deposit_voucher")
return
}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Voucher Indodax yang kamu masukan salah!")



