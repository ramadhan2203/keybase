/*CMD
  command: 🧮 Biaya
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


Api.sendChatAction({
    chat_id:chat.chatid,
    action:'typing'
})
var pemilik = User.getProperty("nama_pemilik")
if(pemilik == undefined){

Bot.sendMessage("😥 Yah info akun kamu belum diperbaharui, silahkan perbaharui info akun kamu dulu ya. ketik /edit_akun untuk memperbaharui info akun!!")

return
}

Bot.sendInlineKeyboard([{title:"Simulasi", command:"/simulasi"}],"*SIMULASI BIAYA TRANSAKSI*\n\n<=> ✦ Jual Voucher: `0.25%`, Minimal Rp `10,000`\n<=> ✦ Beli Voucher: Biaya 0%\n<=> ✦ Jual Coin: 0.25% , Minimal Rp `10,000`\n\nBerlaku untuk tujuan bank apapun yang ada di indonesia dan multiPayment apapun tanpa ada biaya tambahan.",{on_result:"/otw"})
