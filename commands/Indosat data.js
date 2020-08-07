/*CMD
  command: Indosat data
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

Bot.runCommand("Indosat_data")
