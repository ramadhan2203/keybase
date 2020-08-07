/*CMD
  command: /id_plgn
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){

return Bot.runCommand("🔙 Kembali")
}else{

User.setProperty("id_pelanggan", data.message,"string")

//Bot.sendMessage("Silahkan masukan nomer HP penerima untuk menerima notifikasi 🔻")

//Bot.runCommand("/pln_hp")
Bot.runCommand("/pln..")

}
