/*CMD
  command: /deposit_voucher
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})


let m = User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid, message_id:m})

Bot.sendKeyboard("🔙 Kembali", "*DEPOSIT VOUCHER INDODAX*\n\n<=><=><=><=><=> ✦ Email: `zonachanger@gmail.com`\n<=><=><=><=><=> ✦ Tekan email, akan tersalin otomatis\n<=><=><=><=><=> ✦ Nominal voucher minimal Rp `5,000`\n\nEmail penerima wajib di isi saat pembuatan voucher Indodax!\nSilahkan masukan kode voucher anda 🔻",{on_result:"/otw"})

Bot.runCommand("/on_deposit_voucher")
