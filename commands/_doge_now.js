/*CMD
  command: /doge_now
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")


//var msg = data.message
//var amount = parseInt(msg)

if(params=="1"){
var json = JSON.parse(data.content)
var kurs = json.ticker.sell
var int = parseInt(kurs)
var rupiah = int.toLocaleString('EN-en')
var min = int*500
var rp = min.toLocaleString('EN-en')
Bot.sendKeyboard("🔙 Kembali","*CURRENT PRICE 1 DOGE => Rp "+rupiah+"*\n\n=> Minimal beli 500 DOGE => Rp "+rp+"\n=> Fee transaksi: Rp 5,000\n\n⚠️ Fee akan di potong saat pengiriman transaksi diproses\n\nSilahkan masukan Jumlah beli 🔻")

Bot.runCommand("/beli_doge")
return
}
Api.deleteMessage({chat_id:chat.chatid, message_id:m})
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/doge_idr/ticker",
success:"/doge_now 1"
})


