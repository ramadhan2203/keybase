/*CMD
  command: /buy_voucher_on
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){
Bot.runCommand("🔙 Kembali")

return
}

var amount = parseInt(data.message)

var stok = Bot.getProperty("stok_voucher")
var rp = stok.toLocaleString('EN-en')

var min = 25000

if(amount<min){
Bot.sendMessage("Mohon maaf minimal beli voucher Indodax Rp `25,000`!")
return
}
if(amount>stok){
Bot.sendMessage("Maaf stok tersedia untuk saat ini hanya Rp `"+rp+"`!")

return
}
var number = Number(data.message)
if(number){


var rupiah = amount.toLocaleString('EN-en')
User.setProperty("voucher_nom", amount,"integer")
Bot.sendKeyboard("✅ Konfirmasi,\n🔙 Kembali","BUY VOUCHER INDODAX\n\n<=> • Jumlah beli: Rp `"+rupiah+"`\n<=> • Jumlah transfer: Rp `"+rupiah+"`\n\n<=> • BRI: `160901003336504`\n<=> • OVO: `083873563833`\n<=> • DANA: `083873563833`\n\nSilahkan transfer sesuai nominal beli ke Nomer rekening diatas,semua nomer rekening di atas atas nama *MUHAMMAD RAMADHAN*\nSilahkan konfirmasi jika sudah transfer 🔻")

Bot.runCommand("/on_buy_voucher")
return
}
Bot.sendMessage("Mohon maaf, format yang anda masukan salah.. silahkan input hanya angka 🔻")
Bot.runCommand("/buy_voucher_on")
return

