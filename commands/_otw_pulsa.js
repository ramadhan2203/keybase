/*CMD
  command: /otw_pulsa
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)
var saldo = Libs.ResourcesLib.userRes("saldo")

if(json.product_details.success == false){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf produk sedang gangguan, silahkan coba lagi nanti atau hubungi Admin !", {on_result:"/otw"})

return
}


var result = json.product_details.results
//var biaya = 1000
var harga = parseInt(result.price+1000).toLocaleString('EN-en')
var id = result.id
var min = parseInt(result.price+1000)

User.setProperty("id_pulsa_tr", id, "string")


var nomer = User.getProperty("nomer")


if(result.description==""){
//Bot.sendMessage(inspect(json))
if(saldo.value()<min){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support",result.name+"\n\n<=> • Harga: Rp `"+harga+"`\n<=> • Total Transaksi: `"+result.total_transactions+"`\n<=> • Nomer Pengisian: `"+nomer+"`\n\nMohon Maaf anda tidak bisa melakukan pembelian produk ini!", {on_result:"/otw"})
return
}
Bot.sendKeyboard("✅ Beli,\n🔙 Kembali",result.name+"\n\n<=> • Harga: Rp `"+harga+"`\n<=> • Total Transaksi: `"+result.total_transactions+"`\n<=> • Nomer Pengisian: `"+nomer+"`\n\nSilahkan Konfirmasi untuk melakukan pembelian produk ini 🔻", {on_result:"/otw"})
Bot.runCommand("/beli_pulsa")
return
}

var des = result.description.replace("- ","")
var dis = des.replace("\r","")
var dos = dis.replace("- ", "\n<=> • ")

if(saldo.value()<min){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support",dos+"\n<=> • Harga: Rp `"+harga+"`\n<=> • Total Transaksi: `"+result.total_transactions+"`\n<=> • Nomer Pengisian: `"+nomer+"`\n\nMohon Maaf anda tidak bisa melakukan pembelian produk ini!", {on_result:"/otw"})
return
}

Bot.sendKeyboard("✅ Beli,\n🔙 Kembali",dos+"\n<=> • Harga: Rp `"+harga+"`\n<=> • Total Transaksi: `"+result.total_transactions+"`\n<=> • Nomer Pengisian: `"+nomer+"`\n\nSilahkan Konfirmasi untuk melakukan pembelian produk ini 🔻", {on_result:"/otw"})

Bot.runCommand("/beli_pulsa")

return
