/*CMD
  command: /simulasi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")

Api.deleteMessage({
chat_id:chat.chatid, message_id:m})

Bot.sendKeyboard("🔙 Kembali", "Hallo "+user.first_name+"\n\nIni adalah simulai biaya transaksi jual voucher indodax dan penukaran coin cryptocurrency ke bank lokal.\n\nSilahkan masukan nomilal IDR 🔻",{on_result:"/otw"})

Bot.runCommand("/simulasi_on")
