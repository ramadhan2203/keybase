/*CMD
  command: /pln_pln
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var json = JSON.parse(data.content)
var result = json.transaction_details.results
var sn = result.sn
var id_pel = result.customer_id
var phone = result.phone
var id = result.id
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
var saldo = Libs.ResourcesLib.userRes("saldo")
let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 

if(result.status=="GAGAL"){
var price = parseInt(result.price_str.replace("Rp ", ""))
var fee = parseInt(1000 + price)
//Bot.sendMessage(fee)
saldo.add(fee)

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Yah produk yang kamu beli gagal, silahkan coba lagi nanti, atau hubungi admin segera",{on_result:"/otw"})

return
}

if(result.status=="IP"){
Bot.run({
command:"/on_check_pln",
run_after:5
})
return
}

if(result.status =="OK"){

//Bot.sendMessage(inspect(json))
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Status Transaksi sukses ID Transaksi `"+id+"` & ID pelanggan `"+id_pel+"` Produk `"+result.voucher.name.toUpperCase()+"` & token `"+sn+"`")



var price = User.getProperty("price_pln")
var amount= parseInt(price)
saldo.remove(amount)

var transaksi_p = Libs.ResourcesLib.anotherChatRes("total", "transaksi")
transaksi_p.add(1)
var total = Libs.ResourcesLib.userRes("total_transaksi")
total.add(1)

let volume_user = Libs.ResourcesLib.userRes("volume")

var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi")

volume_user.add(amount)
volume_transaksi.add(amount)

let referrer = Libs.ReferralLib.currentUser.attractedByUser();
if(referrer){
  
  let referrerRes = Libs.ResourcesLib.anotherUserRes("saldo", referrer.telegramid);
let pion = Libs.ResourcesLib.anotherUserRes("affiliasi", referrer.telegramid)

let refcom = amount * 0.0005;
  pion.add(refcom);
  referrerRes.add(refcom);

}

return
}else{
Bot.runCommand("/on_check_pln")
}
  
return

