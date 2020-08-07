/*CMD
  command: Coin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

Bot.sendMessage("Produk sedang dalam pengembangan!")

//Bot.sendKeyboard("Sell Coin, Buy Coin,\n🔙 Kembali"," Hallo "+user.first_name+"\n\nSilahkan pilih layanan dibawah ini 🔻") 
