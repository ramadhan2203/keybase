/*CMD
  command: kode_bank
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

return
}
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
User.setProperty("kode_bank", data.message, "string")

Bot.sendMessage("Silahkan masukan nomer rekening anda 🔻\nContoh `16090167686978`")

Bot.runCommand("rekening_bank")
