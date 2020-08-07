/*CMD
  command: ⚙ Ekstra
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pemilik = User.getProperty("nama_pemilik")
Api.sendChatAction({
     chat_id:chat.chatid,
     action:'typing'
})

if(pemilik == undefined){

Bot.sendInlineKeyboard([{title:"Set Account", command:"/edit_akun_lagi"}],"Silahkan perbaharui info akun anda terlebih dahulu!",{on_result:"/otw"})


return
}

Bot.sendKeyboard(" 📊 Statistik,❓ Info,📞 Kontak,\n🔙 Kembali", "Silahkan pilih menu yang tersedia 🔻")
