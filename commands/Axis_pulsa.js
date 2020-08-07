/*CMD
  command: Axis_pulsa
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid, action:'typing'})

var msg = "PULSA AXIS\n\n<=> ✦ Silahkan pilih nominal pulsa 🔻 "

var buttons = [
[{title:"Isi Rp 5,000 (Rp 6,865)", command:"/pulsa 573"}],
[{title:"Isi Rp 5,000 Alternatif (Rp 6.970)", command:"/pulsa 1700"}],
[{title:"Isi Rp 10,000 (Rp 11,790)", command:"/pulsa 574"}],
[{title:"Isi Rp 15,000 (Rp 15,980)", command:"/pulsa 575"}],
[{title:"Isi Rp 25,000 (Rp 25,850)", command:"/pulsa 576"}],
[{title:"Isi Rp 25,000 Alternatif (Rp 26,100)", command:"/pulsa 1699"}],
[{title:"Isi Rp 30,000 (Rp 30,825)", command:"/pulsa 577"}],
[{title:"Isi Rp 50,000 (Rp 50,600)", command:"/pulsa 578"}],
[{title:"Isi Rp 100,000 (Rp 99,795)", command:"/pulsa 579"}],
[{title:"Isi Rp 100,000 Alternatif (Rp 100,125)", command:"/pulsa 1698"}]
]

Bot.sendInlineKeyboard(buttons, msg, {on_result:"/otw"})
