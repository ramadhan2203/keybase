/*CMD
  command: 🛒 Transaksi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let validate = Libs.ResourcesLib.userRes("validate")
var m = User.getProperty("msgid")
Api.deleteMessage({chat_id:chat.chatid, message_id:m})
Api.sendChatAction({
chat_id:chat.chatid, action:'typing'})
var pemilik = User.getProperty("nama_pemilik")
if(pemilik == undefined){

Bot.sendInlineKeyboard([{title:"Set Account", command:"/edit_akun_lagi"}],"Silahkan perbaharui info akun anda terlebih dahulu!",{on_result:"/otw"})


return
}
var saldo = Libs.ResourcesLib.userRes("saldo")


var rupiah = saldo.value().toLocaleString('EN-en')


Bot.sendKeyboard("Voucher, Deposit,Coin\nInternet,Pulsa,PLN,\n🔙 Kembali","Silahkan pilih layanan yang tersedia 🔻",{on_result:"/otw"})
