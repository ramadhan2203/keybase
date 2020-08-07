/*CMD
  command: /beli_usdt_konfir
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
Bot.sendKeyboard("🔙 Kembali", "Silahkan masukan wallet USDT ERC20 anda 🔻")
Bot.runCommand("/usdt_wallet")
}else{

Bot.sendMessage("😪 Invalid command")

}
}
