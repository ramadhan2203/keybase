/*CMD
  command: /beli_doge_konfir
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
Bot.sendKeyboard("🔙 Kembali", "Silahkan masukan wallet DOGECOIN anda 🔻")
Bot.runCommand("/doge_wallet")
}else{

Bot.sendMessage("😪 Invalid command")

}
}
