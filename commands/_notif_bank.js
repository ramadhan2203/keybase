/*CMD
  command: /notif_bank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var trx = User.getProperty("trx_id_")
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 
if(params=="1"){

var json = JSON.parse(data.content)
var tx_id = json.partner_trx_id
var name = json.recipient_name
var amount = json.amount.toLocaleString('EN-en')
var bank = json.recipient_bank
var rek = json.recipient_account
Bot.sendMessage("ID Transaksi `"+trx+"` transfer ke Rek `"+rek+"/"+name+"` dengan nominal Rp `"+amount+"` telah sukses dikirimkan.Tanggal `"+time+"` WIB")


return

}

Api.sendChatAction({
chat_id:chat.chatid, action:"typing"})


HTTP.post({
url: "https://partner.oyindonesia.com/api/remit-status",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{
"partner_trx_id":trx 
},
success:"/notif_bank 1"
//bacground:true
})
