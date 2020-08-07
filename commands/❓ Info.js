/*CMD
  command: ❓ Info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
    chat_id:chat.chatid,
    action:'typing'
})
Bot.sendMessage("ZONACHANGER BOT\n\n<=> • Bot version: `1.12`\n<=> • Operation System: `NodeJS`\n<=> • Update: `20 Juli 2020`")
