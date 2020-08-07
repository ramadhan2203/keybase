/*CMD
  command: /beli_btc
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

var min = 0.0005

if(message<0.000500){
Bot.sendMessage("😥 Maaf minimal beli BTC adalah 0.0005 BTC")
return
}
if(message>0.000499999){

User.setProperty("btc_amount", data.message,"float")
Bot.runCommand("/onbuy_btc")

return
}
