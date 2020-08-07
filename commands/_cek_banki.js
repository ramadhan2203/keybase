/*CMD
  command: /cek_banki
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)

//Bot.sendMessage(inspect(json))
var kode = json.recipient_bank
var rek = json.recipient_account
var name = json.recipient_name
var amount = User.getProperty("amount_voc_bank")

var status = json.status.code

if(status=="000"){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
var rupiah = amount.toLocaleString('EN-en')
Bot.sendKeyboard("✅ Konfirmasi, \n📝 Edit","*INFORMASI PENERIMA*\n\n<=> • Jumlah Transfer: Rp `"+rupiah+"`\n<=> • Kode BANK: `"+kode+"`\n<=> • No rekening: `"+rek+"`\n<=> • Pemilik: `"+name+"`\n\nApakah anda akan melakukan transfer ke akun ini? Jika iya silahkan klik tombol konfirmasi dibawah ini 🔻")

Bot.runCommand("/on_tf_bank")
return
}
if(status=="209"){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
Bot.sendMessage("Mohon maaf nomer rekening atau kode BANK anda salah, silahkan cek dan masukan kembali kode BANK anda 🔻")

Bot.runCommand("kode_bank")
return
}

