/*CMD
  command: /saldo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")

//Api.deleteMessage({chat_id:chat.chatid, message_id:m})

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

var buttons = [
        [{title:"Voucher Indodax", command:"/deposit_voucher"}] 
       ] 
//[{title:"Crypto", command:"/deposit_coin"}]
//]
var message = "DEPOSIT\n\n<=> • Email: `zonachanger@gmail.com`\n<=> • Minimum deposit Rp `5,000`\n\nSaldo di bot hanya bisa ditukarkan untuk membeli semua product yang tersedia di Bot, untuk sementara ini tidak bisa ditarik ke Bank lokal atau E-money.\n\nSilahkan pilih metode deposit  🔻"

Bot.editMessage(message,m)
Bot.editInlineKeyboard(buttons,m, {disable_web_page_preview:true, on_result:"/otw"})
