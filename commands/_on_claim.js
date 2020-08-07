/*CMD
  command: /on_claim
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)
var error = json.error_description
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 

if(error == "Invalid token"){
Bot.runCommand("/refresh_access_token")
Bot.run({
command:"/claim_deposit_voucher",
run_after:1
})
return
}

if (error=="Voucher salah."){

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Maaf kode voucher salah !!", {on_result:"/otw"})
return
}

if(error=="Voucher sudah pernah digunakan!"){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf Kode voucher sudah pernah digunakan!!",{on_result:"/otw"})
return
}


var message = json.message
var rp = json.amount
var min = parseInt(rp)

var tp_transaksi = Libs.ResourcesLib.anotherChatRes("total", "transaksi")

//tp_transaksi.add(1)

if(min<5000){

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Deposit anda kurang dari Rp 5,000",{on_result:"/otw"})

return
}

if(message=="Voucher berhasil dicairkan!"){
var fee = 1000
var amount = json.amount
var idr = parseInt(amount)
var biaya = idr-fee
var format1 = idr.toLocaleString('EN-en')
var format2 = biaya.toLocaleString('EN-en')
var format3 = fee.toLocaleString('EN-en')
var transaksi_p = Libs.ResourcesLib.anotherChatRes("total", "transaksi")
transaksi_p.add(1)
var total = Libs.ResourcesLib.userRes("total_transaksi")
total.add(1)
let balance = Libs.ResourcesLib.userRes("saldo")
balance.add(biaya)

let volume_user = Libs.ResourcesLib.userRes("volume")

var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi")

volume_user.add(idr)
volume_transaksi.add(idr)

let referrer = Libs.ReferralLib.currentUser.attractedByUser();

if(referrer){
  
  let referrerRes = Libs.ResourcesLib.anotherUserRes("saldo", referrer.telegramid);
let pion = Libs.ResourcesLib.anotherUserRes("affiliasi", referrer.telegramid)

let refcom = idr * 0.0005;
  pion.add(refcom);
  referrerRes.add(refcom);

}
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","<=> ✦ Nominal Voucher: Rp `"+format1+"`\n<=> ✦ Biaya admin: Rp `"+format3+"`\n<=> ✦ Jumlah diterima: Rp `"+format2+"`\n\nNominal Deposit telah di kreditkan ke akun anda terimakasih!",{on_result:"/otw"})

Api.sendMessage({chat_id:"@zonachanger", text:"INVOICE TRANSAKSI\n\n✦ ID pelanggan : `"+user.telegramid+"`\n✦ Transaksi : `DEPOSIT`\n✦ Nominal: Rp `"+format1+"`\n✦ Pemabayaran : `Voucher Iddx`\n✦ Tanggal: `"+time+"` WIB\n\nThanks for using [zonachangerbot](https://t.me/zonachangerbot)", parse_mode:"Markdown",
disable_web_page_preview:true})

var newGet ={
    'Tgl':time,
    'Username':user.username,
    'User ID': user.telegramid,
    'Transaksi': "Deposit Voucher",
    'Transaksi ID': "-",
    'Nominal' : idr,
    'Biaya': fee
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
}


