/*CMD
  command: 🔙 Kembali
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid, action:'typing'})

Bot.runCommand("/start")

Bot.runCommand("/edit_params")

return
