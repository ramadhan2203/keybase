/*CMD
  command: /notif_money
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 

var json = JSON.parse(data.content)
var tx_id = json.partner_trx_id
var name = json.recipient_name
var amount = json.amount.toLocaleString('EN-en')
var bank = json.recipient_bank
var rek = json.recipient_account
Bot.sendMessage("Transaksi SUKSES\nDetail Transaksi ID `"+tx_id+"` Transfer ke `"+rek+"/"+name+"` Nominal Rp `"+amount+"` Waktu  `"+time+"`",{on_result:"/otw"})
