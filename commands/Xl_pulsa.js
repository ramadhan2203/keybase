/*CMD
  command: Xl_pulsa
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

var msg = "PULSA XL AXIATA\n\n<=> ✦ Silahkan pilih nominal pulsa 🔻 "

var buttons = [
[{title:"Isi Rp 5,000 (Rp 5,965)", command:"/pulsa 580"}],
[{title:"Isi Rp 5,000 Alternatif (Rp 7,000)", command:"/pulsa 976"}],
[{title:"Isi Rp 10,000 (Rp 11,780)", command:"/pulsa 581"}],
[{title:"Isi Rp 10,000 Alternatif (Rp 11,950)", command:"/pulsa 977"}],
[{title:"Isi Rp 15,000 (Rp 15,980)", command:"/pulsa 582"}],
[{title:"Isi Rp 25,000 (Rp 25,850)", command:"/pulsa 583"}],
[{title:"Isi Rp 30,000 (Rp 30,825)", command:"/pulsa 584"}],
[{title:"Isi Rp 50,000 (Rp 50,600)", command:"/pulsa 585"}],
[{title:"Isi Rp 50,000 Alternatif (Rp 50,875)", command:"/pulsa 1600"}],
[{title:"Isi Rp 100,000 (Rp 99,650)", command:"/pulsa 586"}],
[{title:"Isi Rp 100,000 Alternatif (Rp 100,075)", command:"/pulsa 1631"}]
]

Bot.sendInlineKeyboard(buttons, msg, {on_result:"/otw"})
