/*CMD
  command: Three_pulsa
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

var msg = "PULSA THREE\n\n<=> ✦ Silahkan pilih nominal pulsa 🔻 "

var buttons = [
[{title:"Isi Rp 5,000 (Rp 6,345)", command:"/pulsa 588"}],
[{title:"Isi Rp 5,000 Alternatif (Rp 6,530)", command:"/pulsa 482"}],
[{title:"Isi Rp 10,000 (Rp 11,240)", command:"/pulsa 483"}],
[{title:"Isi pulsa Rp 10,000 Alternatif (Rp 11,478)", command:"/pulsa 946"}],
[{title:"Isi Rp 20,000 (Rp 20,690)", command:"/pulsa 484"}],
[{title:"Isi Rp 25,000 (Rp 25,500)", command:"/pulsa 485"}],
[{title:"Isi Rp 30,000 (Rp 30,410)", command:"/pulsa 486"}],
[{title:"Isi Rp 50,000 (Rp 49,750)", command:"/pulsa 487"}],
[{title:"Isi Rp 50,000 Alternatif (Rp 49,920)", command:"/pulsa 2012"}],
[{title:"Isi Rp 75,000 (Rp 74,400)", command:"/pulsa 947"}],
[{title:"Isi Rp 100,000 (Rp 98,700)", command:"/pulsa 488"}],
[{title:"Isi Rp 100,000 Alternatif (Rp 98,900)", command:"/pulsa 2011"}]
]

Bot.sendInlineKeyboard(buttons, msg, {on_result:"/otw"})
