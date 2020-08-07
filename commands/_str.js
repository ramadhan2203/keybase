/*CMD
  command: /str
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Naha
  keyboard: 
  aliases: 
CMD*/

var edit = "📝 Edit";
var konfirm = "✅ Konfirmasi";

if(data.message==edit){
Api.sendChatAction({chat_id:chat.chatid,
action:"typing"});
Bot.sendMessage("ini edit");
return
}

if(data.message==konfirm){
Api.sendChatAction({chat_id:chat.chatid,
action:"typing"});
Bot.sendMessage("ink konfirmasi");
return
}

Api.sendChatAction({chat_id:chat.chatid,
action:"typing"});
Bot.sendMessage("salah");
return

