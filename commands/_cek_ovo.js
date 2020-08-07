/*CMD
  command: /cek_ovo
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
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

if(status=="209"){

Bot.sendMessage("😥 Mohon maaf sepertinya nomer OVO anda salah, silahkan cek dan masukan kembali nomer OVO anda 🔻",{on_result:"/otw"})

Bot.runCommand("/on_ovo_tf")
return
}

if(status=="000"){

var idr =User.getProperty("amount_voucher_ovo").toLocaleString('EN-en')

Bot.sendKeyboard("✅ Konfirmasi, \n📝 Edit","INFORMASI PENERIMA\n\n<=> • Jumlah Transfer: Rp `"+idr+"`\n<=> • No OVO: `"+number+"`/`"+name+"`\n\nApakah anda akan melakukan transfer ke akun ini? Jika iya silahkan klik tombol konfirmasi dibawah ini 🔻",{on_result:"/otw"})
Bot.runCommand("/kon_ovo")

return
}
