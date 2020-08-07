/*CMD
  command: /eth_now
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
var min = int*0.01
var rp = min.toLocaleString('EN-en')
Bot.sendKeyboard("🔙 Kembali","*CURRENT PRICE 1 ETH => Rp "+rupiah+"*\n\n=> Minimal beli 0.005 ETH => Rp "+rp+"\n=> Fee transaksi: Rp 10,000\n\n⚠️ Fee akan di potong saat pengiriman transaksi diproses\n\nSilahkan masukan Jumlah beli 🔻")

Bot.runCommand("/beli_eth")
return
}
Api.deleteMessage({chat_id:chat.chatid, message_id:m})
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/eth_idr/ticker",
success:"/eth_now 1"
})


