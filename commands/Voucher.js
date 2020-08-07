/*CMD
  command: Voucher
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

Bot.sendKeyboard("Jual Voucher, Beli Voucher,\n🔙 Kembali","Silahkan pilih layanan yang tersedia 🔻") 
