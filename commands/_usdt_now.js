/*CMD
  command: /usdt_now
  help: 
  need_reply: false
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
var min = int*10
var rp = min.toLocaleString('EN-en')
Bot.sendKeyboard("🔙 Kembali","*CURRENT PRICE 1 USDT => Rp "+rupiah+"*\n\n=> Minimal beli 10 USDT => Rp "+rp+"\n=> Fee transaksi: Rp 10,000\n\n⚠️ Fee akan di potong saat pengiriman transaksi diproses\n\nSilahkan masukan Jumlah beli USDT 🔻")

Bot.runCommand("/beli_usdt")
return
}
Api.deleteMessage({chat_id:chat.chatid, message_id:m})
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/usdt_idr/ticker",
success:"/usdt_now 1"
})


