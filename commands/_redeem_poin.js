/*CMD
  command: /redeem_poin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 
var poin_user = Libs.ResourcesLib.userRes("poin")

if(poin_user.value()<10){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Mohon maaf poin anda tidak cukup!",
  show_alert: true
})

return
}
var m = User.getProperty("msgid")

var amount = poin_user.value()*1000

var rupiah = amount.toLocaleString('EN-en')

var saldo = Libs.ResourcesLib.userRes("saldo")

saldo.add(amount)


Bot.editMessage("✅ Poin anda telah berhasil di convert ke Rp `"+rupiah+"` dan telah di kreditkan ke saldo akun anda.",m)

poin_user.remove(poin_user.value())

Api.sendMessage({chat_id:"@zonachanger", text:"INVOICE TRANSAKSI\n\n<=> ✦ ID Pelanggan : `"+user.telegramid+"`\n<=> ✦ Transaksi: `Claim Poin`\n<=> ✦ Nominal Claim: Rp `"+rupiah+"`\n<=> ✦ Tanggal: `"+time+"` WIB", parse_mode:"Markdown"})



