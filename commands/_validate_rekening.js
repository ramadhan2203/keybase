/*CMD
  command: /validate_rekening
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


var msg = Number(data.message)
if(!msg){
Bot.sendMessage("Mohon maaf silahkan masukan nomer rekening yang valid 🔻")

Bot.runCommand("/validate_rekening")

return
}
User.setProperty("no_rekening",data.message,"string")
var kode = User.getProperty("kode_bank").toLowerCase()
//Bot.sendMessage("Silahkan masukan nama pemilik rekening 🔻")
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

HTTP.post({
url: "https://partner.oyindonesia.com/api/inquiry",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{"recipient_bank": kode, "recipient_account": data.message},
success:"/validate_pemilik"
//bacground:true
})




//Bot.runCommand("/validate_pemilik")
