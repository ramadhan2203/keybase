/*CMD
  command: 📈 Trading
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
[{title: "Jack Trader", url:"https://t.me/jacktraderInd"}]
]

var msg = "Hallo "+user.first_name+"\nAnda suka trading? tapi lebih banyak lose di banding profit, kurang pengalaman dan tidak bisa analisa market?\nTenang saja kami dari *JACK TRADER* signal trading terbesar dan *No 1 di INDONESIA*, hadir untuk memberikan edukasi dan signal trading secara gratis tanpa biaya apapun, dengan fasilitas lengkap, dan mentor analisa yang profesional, dijamin profit konsisten setiap harinya.\n\nMinat bergabung? silahkan klik button di bawah ini 🔻"

Bot.sendInlineKeyboard(buttons, msg)
