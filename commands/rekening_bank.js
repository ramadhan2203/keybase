/*CMD
  command: rekening_bank
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){
Bot.runCommand("🔙 Kembali")

return
}
//Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

var kode = User.getProperty("kode_bank")
var rek = User.setProperty("no_rek_bank", data.message,"string")
var no_rek = User.getProperty("no_rek_bank")

var nominal = User.getProperty("amount_voc_bank").toLocaleString('EN-en')

//Bot.sendMessage("`Loading data...`")

Api.sendChatAction({
chat_id:chat.chatid, action:"typing"})

HTTP.post({
url: "https://partner.oyindonesia.com/api/inquiry",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{"recipient_bank": kode, "recipient_account": no_rek},
success:"/cek_banki"
//bacground:true
})

