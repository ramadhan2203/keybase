/*CMD
  command: /edit_akun_lagi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")
Api.deleteMessage({chat_id:chat.chatid, message_id:m})

Bot.runCommand("/edit_akun")
