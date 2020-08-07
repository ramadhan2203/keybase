/*CMD
  command: Indosat_pulsa
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

var msg = "PULSA INDOSAT\n\n<=> ✦ Silahkan pilih nominal pulsa 🔻 "

var buttons = [
[{title:"Isi Rp 5,000 (Rp 6,860)", command:"/pulsa 344"}],
[{title:"Isi Rp 5,000 Alternatif (Rp 7,150)", command:"/pulsa 1604"}],
[{title:"Isi Rp 10,000 (Rp 11,860)", command:"/pulsa 345"}],
[{title:"Isi pulsa Rp 10,000 Alternatif (Rp 12,150)", command:"/pulsa 1603"}],
[{title:"Isi Rp 12,000 (Rp 13,100)", command:"/pulsa 2198"}], 
[{title:"Isi Rp 15,000 (Rp 15,900)", command:"/pulsa 2199"}],
[{title:"Isi Rp 20,000 (Rp 21,070)", command:"/pulsa 346"}],
[{title:"Isi Rp 20,000 Alternatif (Rp 21,060)", command:"/pulsa 1605"}],
[{title:"Isi Rp 25,000 (Rp 26,070)", command:"/pulsa 347"}],
[{title:"Isi Rp 25,000 Alternatif (Rp 26,030)", command:"/pulsa 1606"}],
[{title:"Isi Rp 30,000 (Rp 30,170)", command:"/pulsa 348"}],
[{title:"Isi Rp 40,000 (Rp 40,650)", command:"/pulsa 2214"}],
[{title:"Isi Rp 50,000 (Rp 50,300)", command:"/pulsa 349"}],
[{title:"Isi Rp 50,000 Alternatif (Rp 50,210)", command:"/pulsa 1607"}],
[{title:"Isi Rp 60,000 (Rp 60,300)", command:"/pulsa 2215"}],
[{title:"Isi Rp 70,000 (Rp 70,900)", command:"/pulsa 2216"}],
[{title:"Isi Rp 80,000 (Rp 79,500)", command:"/pulsa 2217"}],
[{title:"Isi Rp 90,000 (Rp 89,900)", command:"/pulsa 2218"}],
[{title:"Isi Rp 100,000 (Rp 98,150)", command:"/pulsa 350"}],
[{title:"Isi Rp 100,000 Alternatif (Rp 98,100)", command:"/pulsa 1608"}]
]

Bot.sendInlineKeyboard(buttons, msg, {on_result:"/otw"})
