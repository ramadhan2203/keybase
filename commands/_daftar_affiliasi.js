/*CMD
  command: /daftar_affiliasi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

var msg 
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

if(refList.length>0){
  var msg = "List user affiliasi anda:\n";
  for(i in refList){
    user = refList[i];
    msg+= "\n<=> • ID pelanggan: `"+user.telegramid+"`";
  }

  
}else{
   Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "😥 Mohon maaf saat ini anda tidak mempunyai affiliasi",
  show_alert: true
})
}

Bot.editMessage(msg, m)

