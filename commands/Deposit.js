/*CMD
  command: Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})


//Bot.sendMessage("`Loading data...`") 

Bot.runCommand("/saldopro")
