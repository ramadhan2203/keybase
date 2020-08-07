/*CMD
  command: /edit_akun
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})


//let m = User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid, message_id:m})
Bot.sendKeyboard("🔙 Kembali", "Silahkan masukan email akun Indodax anda 🔻",{on_result:"/otw"})

Bot.runCommand("/validate_email")
