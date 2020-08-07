/*CMD
  command: /beli_doge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){
Bot.runCommand("/start")
return
}

var msg = Number(data.message)
if(!msg){
Bot.sendMessage("😥 Invalid amount")
return
}

var min = 500

if(message<500){
Bot.sendMessage("😥 Maaf minimal beli DOGE adalah 500 DOGE")
return
}
if(message>499.99999){

User.setProperty("doge_amount", data.message,"integer")
Bot.runCommand("/onbuy_doge")

return
}
