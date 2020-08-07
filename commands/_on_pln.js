/*CMD
  command: /on_pln
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)
var id = json.results.id
var id_pel = json.results.id_plgn
var amount = parseInt(json.results.harga+1000)
var phone = json.results.phone
var name = json.results.produk.nama.toUpperCase()

//Bot.sendMessage(inspect(json))

if(json.status=="false"){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Yah product sedang gangguang, silahkan coba lagi nanti")
return
}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Transaksi `"+id+"` & ID pelanggan `"+id_pel+"` Sedang dalam proses, untuk cek status transaksi silahkan kunjungi tautan ini [zonachanger.com](https://zonachanger.000webhostapp.com/transaksi.php?id="+id+")",{disable_web_page_preview:true})

Api.sendMessage({chat_id:"@zonachanger", text:"INVOICE TRANSAKSI\n\n✦ Transaksi ID: `"+id+"`\n✦ Transaksi : Token PLN\n✦ Harga: Rp `"+amount.toLocaleString('EN-en')+"`\n✦ Pembayaran : `Saldo Akun`\n✦ Tanggal: `"+json.results.tanggal+"` WIB!\n\nThanks for using [zonachangerbot](https://t.me/zonachangerbot)", parse_mode:"Markdown",disable_web_page_preview:true})
User.setProperty("id_trans_pln", id, "string")


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

var newGet ={
    'Tgl':json.results.tanggal,
    'Username':user.username,
    'User ID': user.telegramid,
    'Transaksi':json.results.produk.nama,
    'Transaksi ID': json.results.id,
    'Nominal' : amount,
    'Biaya': "1000"
}

let tsn = {
  sheetName: "zonachanger",
  row: newGet,
  onSuccess: "/___",
  onError: "__0_"
}
Libs.GoogleSpreadSheet.addRow(tsn)
Bot.runCommand("/edit_params")
return



