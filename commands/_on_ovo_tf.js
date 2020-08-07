/*CMD
  command: /on_ovo_tf
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(data.message=="🔙 Kembali"){

Bot.runCommand("/start")
Bot.runCommand("/edit_params")

return
}

var number = Number(data.message)
var code = "0"
if(number){

User.setProperty("number_emoney", data.message,"string")

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
"recipient_bank":"ovo",
"recipient_account": data.message
},
success:"/cek_ovo"
})
return
}

Bot.sendMessage("Invalid number account, please input correct number account!!",{on_result:"/otw"})
Bot.runCommand("/on_ovo_tf")
return

