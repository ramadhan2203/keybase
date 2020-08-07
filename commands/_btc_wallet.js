/*CMD
  command: /btc_wallet
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

var amount = User.getProperty("doge_amount")
var wallet = User.setProperty("wallet_btc", data.message, "string")
var terima = User.getProperty("terimadoge")

var wallet_ = User.getProperty("wallet_btc")

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/btc_idr/ticker",
success:"/buy_btc_in"
})



}
