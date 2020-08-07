/*CMD
  command: Smart data
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("`Loading data...`")

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

//Bot.sendMessage("maintenance")
Bot.runCommand("Smart_data")
