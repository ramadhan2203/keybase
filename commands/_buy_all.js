/*CMD
  command: /buy_all
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

let descripsi = User.getProperty("deskripsi")

User.setProperty("nomer", data.message,"text")
let price = User.getProperty("price_pulsa")

var rupiah = price.toLocaleString('EN-en')

Bot.sendKeyboard("✅ Konfirmasi,\n🔙 Kembali","Konfirmasi Pembelian Product\n\n<=> ✦ "+descripsi+"\n<=> ✦ Harga: Rp `"+rupiah+"` \n<=> ✦ Nomer pengisian: "+data.message+"\n\nSilahkan periksa kembali nomer pengisian! 🔻", {on_result:"/otw"})

Bot.runCommand("/on_buyall")
