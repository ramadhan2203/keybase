/*CMD
  command: /validate_bank
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){
     Bot.runCommand("🔙 Kembali")
}else{
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})


let m = User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid, message_id:m})

User.setProperty("kode_bank",message,"string")

Bot.sendKeyboard("🔙 Kembali","Silahkan masukan nomer rekening anda 🔻\nContoh `160901003336504`",{on_result:"/otw"})

Bot.runCommand("/validate_rekening")
}
