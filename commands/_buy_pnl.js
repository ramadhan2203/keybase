/*CMD
  command: /buy_pnl
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
var result = json.product_details.results

var name = result.name.replace("Token PLN Rp", "")
var fee = 1000
var price = result.price+fee
User.setProperty("harga_plnid", price, "integer")
var rupiah = price.toLocaleString('EN-en')
var des = result.description
var id = result.id
User.setProperty("id_buy_pln", id, "string")
var m = User.getProperty("msgid")
Api.deleteMessage({chat_id:chat.chatid, message_id:m})
var nomer = User.getProperty("id_pelanggan")

Bot.sendKeyboard("✅ Beli,\n🔙 Kembali","Produk Token PLN\n\n<=> ✦ Token PLN isi `"+name+"`\n<=> ✦ Harga: Rp `"+rupiah+"`\n<=> ✦ ID pelanggan: `"+nomer+"`\n\nSilahkan Konfirmasi pembelian anda jika data di atas sesuai", {on_result:"/otw"})
Bot.runCommand("/pln_buying")
