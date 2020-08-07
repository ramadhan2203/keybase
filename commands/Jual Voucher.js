/*CMD
  command: Jual Voucher
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage("😥 Layanan ini sedang maintenance")

Bot.sendMessage("`Please wait...`")
Api.sendChatAction({
chat_id:chat.chatid, action:"typing"})


HTTP.get({
url:"https://partner.oyindonesia.com/api/balance",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
success:"Jual_voucher"
})
