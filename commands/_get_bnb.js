/*CMD
  command: /get_bnb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")
var address = User.getProperty("address_bnb")

if(params=="5"){
var json = JSON.parse(data.content)

Bot.sendMessage("*DEPOSIT BNB*\n\n-  `"+json.result.address+"`\n\n- `"+json.result.dest_tag+"` (memo)\n\n⚠️ *PERHATIAN*\nDeposit *BNB* wajib menggunakan memo/tag, jika tidak memasukan memo, maka deposit anda akan hangus.")
return
}
Bot.editMessage("`Get your deposit address...`",m)

Api.sendChatAction({chat_id : chat.chatid, action:"typing"})


Libs.CoinPayments.createPermanentWallet({
  currency: "BNB",
  label: "myLabel",
  onSuccess: "/get_bnb 5",
  //onIPN: "/onPermanentWalletIPN",
  onIncome: "/in_bnb"
})
