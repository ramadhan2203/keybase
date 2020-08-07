/*CMD
  command: PLN
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage("`Loading data...`")
Api.sendChatAction({chat_id:chat.chatid,action:'typing'})
Bot.sendKeyboard("🔙 Kembali",
"Produk Token PLN\n\n<=> ✦ Silahlan Masukan ID pelanggan\n<=> ✦ Contoh `1234567890`",{on_result:'/otw'})
Bot.runCommand("/id_plgn")
