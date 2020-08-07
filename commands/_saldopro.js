/*CMD
  command: /saldopro
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

var buttons = [
        [{title:"Voucher Indodax", command:"/deposit_voucher"}]
]
       //[ {title:"Cryptocurrency", command:"/deposit_coin"}]
//]
var message = "Saldo di bot hanya bisa ditukarkan untuk membeli semua product yang tersedia.\n\nSilahkan pilih metode deposit yang ingin anda lakukan 🔻"

Bot.sendInlineKeyboard(buttons,message,{on_result:"/otw"})
