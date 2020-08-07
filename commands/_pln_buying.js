/*CMD
  command: /pln_buying
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var price = User.getProperty("harga_plnid")
var Id = User.getProperty("id_pelanggan")
var Idpln = User.getProperty("id_buy_pln")

var msg = User.getProperty("msgid")

var validate = data.message
if( validate == "✅ Beli"){
Api.deleteMessage({chat_id:chat.chatid, message_id:msg})
Bot.runCommand("/cek_buying")
return
}

if(validate=="🔙 Kembali"){
Api.deleteMessage({chat_id:chat.chatid, message_id:msg})
Bot.runCommand("🔙 Kembali")
return
}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Wrong Command",{on_result:"/otw"})
return
