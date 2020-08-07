/*CMD
  command: 📊 Statistik
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
    chat_id:chat.chatid,
    action:'typing'
})
var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi")
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 
var transaksi = Libs.ResourcesLib.anotherChatRes("total", "transaksi")

var rupiah = volume_transaksi.value().toLocaleString('EN-en')

var tp = transaksi.value().toLocaleString('EN-en')
var st = data.statistics;
var act = st.active_during_last_day;
var total = st.total;
var persentase = act/total*100

Bot.sendMessage("STATISTIK\n\n<=> ✦ Total user: `"+st.total+"` User\n<=> ✦ Active user: `"+persentase.toFixed(2)+"%`\n<=> ✦ Total transaksi : `"+tp+"` kali\n<=> ✦ Volume Transaksi: Rp `"+rupiah+"`\n\nTanggal : `"+time+"` WIB")
