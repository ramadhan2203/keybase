/*CMD
  command: /beli_kuota
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)

//Bot.sendMessage(inspect(json))
var error = json.product_details.message
if(error == "Parameter tidak benar."){
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf produk tidak ditemukan, silahkan cek format beli anda",{on_result:"/otw"})
return
}

if(error=="Produk tidak ditemukan."){
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf produk tidak ditemukan, silahkan cek format beli anda",{on_result:"/otw"})
return
}

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

var nama =json["product_details"].results["provider"].name.toUpperCase()

var result = json.product_details.results
var price = parseInt(result.price+3000)
var rupiah = price.toLocaleString('EN-en')

User.setProperty("price_pulsa", price, "integer")
let balance = Libs.ResourcesLib.userRes("saldo")

if(balance.value()<price){
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf saldo anda tidak mencukupi untuk membeli product ini, silahkan isi ulang terlebih dahulu saldo anda ketik /saldopro untuk mengisi ulang saldo anda. terimakasih",{on_result:"/otw"})
return
}


var deskripsi = User.setProperty("deskripsi", result.description,"string")

var des = User.getProperty("deskripsi")

if(result.description==""){
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.sendKeyboard("🔙 Kembali","PRODUCT "+ nama+"\n\n<=> ✦  `"+result.name+"`\n<=> ✦ Harga: Rp `"+rupiah+"`\n\nSilahkan masukan nomer pengisian 🔻" )
User.setProperty("deskripsi", result.name, "string")
Bot.runCommand("/buy_all")

}else{
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.sendKeyboard("🔙 Kembali","PRODUCT "+ nama+"\n"+result.description+"\n<=> ✦ Harga: Rp `"+rupiah+"`\n\nSilahkan masukan nomer pengisian 🔻" )

Bot.runCommand("/buy_all")
return
}
