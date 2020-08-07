/*CMD
  command: /get_trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = User.getProperty("msgid")
var address = User.getProperty("address_trx")

if(params=="5"){
var json = JSON.parse(data.content)

if(address==undefined){

User.setProperty("address_trx", json.result.address, "string")

Bot.sendMessage("*DEPOSIT TRX*\n\n`"+json.result.address+"`\n\n⚠️ *PERHATIAN*\nDeposit Coin cryptocurrency membutuhkan sedikitnya 3 konfirmasi jaringan blockchain, atau 5- 20 menit, jumlah deposit anda akan terkonvert ke rupiah dan otomatis di kreditkan ke saldo anda.")

return
}
Bot.sendMessage("*DEPOSIT TRX*\n\n`"+address+"`\n\n⚠️ *PERHATIAN*\nDeposit Coin cryptocurrency membutuhkan sedikitnya 3 konfirmasi jaringan blockchain, atau 5- 20 menit, jumlah deposit anda akan terkonvert ke rupiah dan otomatis di kreditkan ke saldo anda.")

return
}

Bot.editMessage("`Get your deposit address...`",m)

Api.sendChatAction({chat_id : chat.chatid, action:"typing"})


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "myLabel",
  onSuccess: "/get_trx 5",
  //onIPN: "/onPermanentWalletIPN",
  onIncome: "/in_trx"
})
