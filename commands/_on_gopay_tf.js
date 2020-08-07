/*CMD
  command: /on_gopay_tf
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(data.message=="🔙 Kembali"){

  Bot.runCommand("🔙 Kembali")

return
}

var number = Number(data.message)
var code = "0"
if(number){

User.setProperty("number_emoney", data.message,"string")

//Bot.sendMessage("`Checking account E-Money...`")

Api.sendChatAction({chat_id:chat.chatid, action:"typing"
})

HTTP.post({
url:"https://partner.oyindonesia.com/api/inquiry",
headers:{
"Conyent-Type":"application/json",
"Acept":"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{
"recipient_bank":"gopay",
"recipient_account": data.message
},
success:"/cek_gopay"
})
return
}else{

Bot.sendMessage("Invalid number account, please input correct number account!!")
Bot.runCommand("/on_gopay_tf")
}

