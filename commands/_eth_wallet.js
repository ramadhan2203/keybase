/*CMD
  command: /eth_wallet
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
}else{

var amount = User.getProperty("eth_amount")
var wallet = User.setProperty("wallet_eth", data.message, "string")
var terima = User.getProperty("terimaeth")

var wallet_ = User.getProperty("wallet_eth")

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/eth_idr/ticker",
success:"/buy_eth_in"
})



}
