/*CMD
  command: /beli_eth
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

var min = 0.01

if(message<0.00100){
Bot.sendMessage("😥 Maaf minimal beli ETH adalah 0.01 ETH")
return
}
if(message>0.0099999){

User.setProperty("eth_amount", data.message,"float")
Bot.runCommand("/onbuy_eth")

return
}
