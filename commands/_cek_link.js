/*CMD
  command: /cek_link
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
//Bot.sendMessage(inspect(json))
Bot.sendMessage("Mohon maaf sepertinya nomer Linkaja anda salah, silahkan cek dan masukan kembali nomer Linkaja anda 🔻",{on_result:"/otw"})

Bot.runCommand("/on_link_tf")
return
}

if(status=="000"){

var idr =User.getProperty("amount_voucher_dana").toLocaleString('EN-en')

Bot.sendKeyboard("✅ Konfirmasi, \n📝 Edit","INFORMASI PENERIMA\n\n<=> • Jumlah Transfer: Rp `"+idr+"`\n<=> • Detail penerima: `"+number+"`/`"+name+"`\n\nApakah anda akan melakukan transfer ke akun ini? Jika iya silahkan klik tombol konfirmasi dibawah ini 🔻",{on_result:"/otw"})
Bot.runCommand("/kon_link")

return
}
