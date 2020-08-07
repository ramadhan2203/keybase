/*CMD
  command: /onbuy_doge
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="9"){
var json = JSON.parse(data.content)
var kurs = json.ticker.sell
var int = parseInt(kurs)
var rupiah = int.toLocaleString('EN-en')
var min = int*500

var amount = User.getProperty("doge_amount")
var jumlah = amount*int
var fee = 5000
var terima = jumlah-fee
var total_t = terima/int
var rupiah_j = jumlah.toLocaleString('EN-en')
User.setProperty("terima_doge", terima, "integer")
User.setProperty("total_terimadoge", total_t.toFixed(2),"integer")
var total_tt = total_t*int

User.setProperty("idr_doge", total_tt, "integer")
var rupiah_tt = total_tt.toLocaleString('EN-en')
var rp = min.toLocaleString('EN-en')
Bot.sendKeyboard("✅ Konfirmasi,\n🔙 Kembali","*CURRENT PRICE 1 DOGE => Rp "+rupiah+"*\n\n=> Jumlah beli: "+amount+" DOGE => Rp "+rupiah_j+"\n=> Fee transaksi: Rp 5,000\n=> Diterima: "+total_t.toFixed(2)+" DOGE => Rp "+rupiah_tt+"\n\nSilahkan Kirim Nominal beli: *Rp "+rupiah_j+"* ke rekening di bawah ini\n\n=> BRI: `160901003336504`\n=> OVO: `083873563833`\n=> DANA: `083873563833`\n\nSilahkan transfer sesuai nominal beli ke Nomer rekening diatas,semua nomer rekening di atas atas nama *MUHAMMAD RAMADHAN*\n\nSilahkan konfirmasi jika sudah transfer 🔻")

Bot.runCommand("/beli_doge_konfir")
return
}

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/doge_idr/ticker",
success:"/onbuy_doge 9"
})


