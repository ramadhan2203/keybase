/*CMD
  command: /onbuy_btc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="9"){
var json = JSON.parse(data.content)
var kurs = json.ticker.sell
var int = parseFloat(kurs)
var rupiah = int.toLocaleString('EN-en')
var min = int*0.0005

var amount = User.getProperty("btc_amount")
var jumlah = amount*int
var fee = 10000
var terima = jumlah-fee
var total_t = terima/int
var rupiah_j = jumlah.toLocaleString('EN-en')
User.setProperty("terima_btc", terima, "integer")
User.setProperty("total_terimabtc", total_t.toFixed(8),"float")
var total_tt = total_t*int

User.setProperty("idr_btc", total_tt, "integer")
var rupiah_tt = total_tt.toLocaleString('EN-en')
var rp = min.toLocaleString('EN-en')
Bot.sendKeyboard("✅ Konfirmasi,\n🔙 Kembali","*CURRENT PRICE 1 BTC => Rp "+rupiah+"*\n\n=> Jumlah beli: `"+amount.toFixed(8)+"` BTC => `Rp "+rupiah_j+"`\n=> Fee transaksi: Rp 10,000\n=> Diterima: `"+total_t.toFixed(8)+"` BTC => Rp "+rupiah_tt+"\n\nSilahkan Kirim Nominal beli: *Rp "+rupiah_j+"* ke rekening di bawah ini\n\n=> BRI: `160901003336504`\n=> OVO: `083873563833`\n=> DANA: `083873563833`\n\nSilahkan transfer sesuai nominal beli ke Nomer rekening diatas,semua nomer rekening di atas atas nama *MUHAMMAD RAMADHAN*\n\nSilahkan konfirmasi jika sudah transfer 🔻")

Bot.runCommand("/beli_btc_konfir")
return
}

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/btc_idr/ticker",
success:"/onbuy_btc 9"
})


