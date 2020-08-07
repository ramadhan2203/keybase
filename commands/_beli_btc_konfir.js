/*CMD
  command: /beli_btc_konfir
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

if(message=="✅ Konfirmasi"){
Bot.sendKeyboard("🔙 Kembali", "Silahkan masukan wallet BITCOIN anda 🔻")
Bot.runCommand("/btc_wallet")
}else{

Bot.sendMessage("😪 Invalid command")

}
}
