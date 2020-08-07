/*CMD
  command: /beli_usdt
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

var min = 10

if(message<10){
Bot.sendMessage("😥 Maaf minimal beli USDT adalah 10 USDT")
return
}
if(message>9.99999){

User.setProperty("usdt_amount", data.message,"integer")
Bot.runCommand("/onbuy_usdt")

return
}
