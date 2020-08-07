/*CMD
  command: Smart_pulsa
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

var msg = "PULSA SMARTFREN\n\n<=> ✦ Silahkan pilih nominal pulsa 🔻 "

var buttons = [
[{title:"Isi Rp 5,000 (Rp 6,010)", command:"/pulsa 372"}],
[{title:"Isi Rp 5,000 Alternatif (Rp 6,049)", command:"/pulsa 1879"}],
[{title:"Isi Rp 10,000 (Rp 10,915)", command:"/pulsa 373"}],
[{title:"Isi pulsa Rp 10,000 Alternatif (Rp 10,949)", command:"/pulsa 1880"}],
[{title:"Isi Rp 15,000 (Rp 15,900)", command:"/pulsa 2199"}],
[{title:"Isi Rp 20,000 (Rp 20,890)", command:"/pulsa 374"}],
[{title:"Isi Rp 20,000 Alternatif (Rp 21,000)", command:"/pulsa 1881"}],
[{title:"Isi Rp 25,000 (Rp 25,800)", command:"/pulsa 375"}],
[{title:"Isi Rp 25,000 Alternatif (Rp 25,900)", command:"/pulsa 1882"}],
[{title:"Isi Rp 30,000 (Rp 30,700)", command:"/pulsa 376"}],
[{title:"Isi Rp 50,000 (Rp 50,275)", command:"/pulsa 377"}],
[{title:"Isi Rp 50,000 Alternatif (Rp 50,600)", command:"/pulsa 1883"}],
[{title:"Isi Rp 60,000 (Rp 60,100)", command:"/pulsa 379"}],
[{title:"Isi Rp 100,000 (Rp 98,875)", command:"/pulsa 383"}],
[{title:"Isi Rp 100,000 Alternatif (Rp 100,200)", command:"/pulsa 1884"}],
[{title:"Isi Rp 150,000 (Rp 149,900)", command:"/pulsa 384"}],
[{title:"Isi Rp 200,000 (Rp 199,325)", command:"/pulsa 385"}]
]

Bot.sendInlineKeyboard(buttons, msg, {on_result:"/otw"})
