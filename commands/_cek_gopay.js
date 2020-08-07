/*CMD
  command: /cek_gopay
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)
var name = json.recipient_name
var number = User.getProperty("number_emoney")
var bank = json.recipient_bank
var status = json.status.code


if(status=="209"){

Bot.sendMessage("Mohon maaf sepertinya nomer DANA anda salah, silahkan cek dan masukan kembali nomer GO-PAY anda 🔻")

Bot.runCommand("/on_gopay_tf")
return
}

if(status=="000"){

var idr =User.getProperty("amount_voucher_dana").toLocaleString('EN-en')

Bot.sendKeyboard("✅ Konfirmasi, \n📝 Edit","INFORMASI PENERIMA\n\n<=> • Jumlah Transfer: Rp `"+idr+"`\n<=> • Detail penerima: `"+number+"`/`"+name+"`\n\nApakah anda akan melakukan transfer ke akun ini? Jika iya silahkan klik tombol konfirmasi dibawah ini 🔻",{on_result:"/otw"})
Bot.runCommand("/kon_gopay")

return
}
