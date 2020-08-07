/*CMD
  command: /usdt_wallet
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

var amount = User.getProperty("usdt_amount")
var wallet = User.setProperty("wallet_usdt", data.message, "string")
var terima = User.getProperty("terima")

var wallet_ = User.getProperty("wallet_usdt")

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
HTTP.post({
url:"https://indodax.com/api/usdt_idr/ticker",
success:"/buy_usdt_in"
})



}
