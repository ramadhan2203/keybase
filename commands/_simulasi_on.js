/*CMD
  command: /simulasi_on
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid,action:"typing"})
var ms = User.getProperty("msgid")
Api.deleteMessage({
chat_id:chat.chatId, message_id:ms})

if(message=="🔙 Kembali"){
Bot.runCommand("🔙 Kembali")
return
}

var msg = data.message
var biaya = 10000
var biaya_rp = biaya.toLocaleString('EN-en')
var amount = parseInt(msg)
var fee = amount-10000
var basic = amount*0.25
var fee_rp = fee.toLocaleString('EN-en')
var rupiah = amount.toLocaleString('EN-en')
var pro = basic/100
var total_basic = amount-pro
var total_rp = total_basic.toLocaleString('EN-en')
var biaya_pro = pro.toLocaleString('EN-en')
if(amount<3000000){
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*SIMULASI BIAYA TRANSAKSI*\n\n<=> ✦ Nominal transaksi: `Rp "+rupiah+"`\n<=> ✦ Fee/biaya admin: `Rp "+biaya_rp+"`\n<=> ✦ Total di terima: `Rp "+fee_rp+"`\n\nFee/biaya bersifat final, tidak bisa diganggu gugat,apalagi di tawar. ")
return
}

if(amount>2999999){
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","*SIMULASI BIAYA TRANSAKSI*\n\n<=> ✦ Nominal transaksi: `Rp "+rupiah+"`\n<=> ✦ Fee/biaya admin: `Rp "+biaya_pro+"`\n<=> ✦ Total di terima: `Rp "+total_rp+"`\n\nFee/biaya bersifat final, tidak bisa diganggu gugat,apalagi di tawar. ")
return
}
