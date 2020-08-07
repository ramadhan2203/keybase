/*CMD
  command: Telkom_pulsa
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

var msg = "PULSA TELKOMSEL\n\n<=> ✦ Silahkan pilih nominal pulsa 🔻 "

var buttons = [
[{title:"Isi Rp 5,000 (Rp 6,700)", command:"/pulsa 314"}],
[{title:"Isi Rp 5,000 Alternatif (Rp 7,000)", command:"/pulsa 587"}],
[{title:"Isi Rp 10,000 (Rp 11,450)", command:"/pulsa 315"}],
[{title:"Isi pulsa Rp 10,000 Alternatif (Rp 11,550)", command:"/pulsa 1128"}],
[{title:"Isi Rp 15,000 (Rp 15,880)", command:"/pulsa 2467"}],
[{title:"Isi Rp 20,000 (Rp 21,040)", command:"/pulsa 316"}],
[{title:"Isi Rp 20,000 Alternatif (Rp 21,600)", command:"/pulsa 1307"}],
[{title:"Isi Rp 25,000 (Rp 25,811)", command:"/pulsa 317"}],
[{title:"Isi Rp 25,000 Alternatif (Rp 25,830)", command:"/pulsa 1601"}],
[{title:"Isi Rp 30,000 (Rp 30,850)", command:"/pulsa 2203"}],
[{title:"Isi Rp 40,000 (Rp 40,450)", command:"/pulsa 2205"}],
[{title:"Isi Rp 50,000 (Rp 50,140)", command:"/pulsa 318"}],
[{title:"Isi Rp 50,000 Alternatif (Rp 50,700)", command:"/pulsa 1592"}],
[{title:"Isi Rp 60,000 (Rp 60,780)", command:"/pulsa 2208"}],
[{title:"Isi Rp 70,000 (Rp 70,520)", command:"/pulsa 2210"}],
[{title:"Isi Rp 75,000 (Rp 74,950)", command:"/pulsa 2210"}],
[{title:"Isi Rp 80,000 (Rp 80,250)", command:"/pulsa 2212"}],
[{title:"Isi Rp 100,000 (Rp 98,130)", command:"/pulsa 319"}],
[{title:"Isi Rp 100,000 Alternatif (Rp 99,050)", command:"/pulsa 1703"}],
[{title:"Isi Rp 150,000 (Rp 147,600)", command:"/pulsa 320"}],
[{title:"Isi Rp 200,000 (Rp 200,000)", command:"/pulsa 321"}]
]

Bot.sendInlineKeyboard(buttons, msg, {on_result:"/otw"})
