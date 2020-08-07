/*CMD
  command: ⭐ Feeds
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid, action:"typing"})
var buttons = [
[{title: "⭐", command:"/feeds 1"}],
[{title: "⭐⭐", command:"/feeds 2"},
{title: "⭐⭐⭐", command:"/feeds 3"}],
[{title: "⭐⭐⭐⭐", command:"/feeds 4"},
{title: "⭐⭐⭐⭐⭐", command:"/feeds 5"}]
]
Bot.sendInlineKeyboard(buttons,"Hallo "+user.first_name+" seberapa puas anda dengan layanan @zonachangerbot?")
