/*CMD
  command: /on_buyall
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){
Bot.runCommand("🔙 Kembali")
}else{
if(message=="✅ Konfirmasi"){
Bot.sendKeyboard("🔙 Kembali","`Prosesing..`")
Bot.runCommand("/buy_alls")
return
}
}
