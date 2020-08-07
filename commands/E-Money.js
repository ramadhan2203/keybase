/*CMD
  command: E-Money
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage("`Loading data...`")
Api.sendChatAction({
chat_id:chat.chatid,action:"typing"})

Bot.sendKeyboard("Ovo, Dana,\nGopay,Link aja,\n🔙 Kembali", "Silahkan pilih layanan yang tersedia  🔻")

