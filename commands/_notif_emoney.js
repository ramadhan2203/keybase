/*CMD
  command: /notif_emoney
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var trx = User.getProperty("trx_id_")

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
success:"/notif_money"
//bacground:true
})
