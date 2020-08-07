/*CMD
  command: /on_buy_voucher
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var nominal = User.getProperty("voucher_nom")
var  rupiah = nominal.toLocaleString('EN-en')
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 


if(message=="🔙 Kembali"){

Bot.runCommand("/start")

return
}

if(message=="✅ Konfirmasi"){

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon menunggu, kami akan segera mengirimkan voucher indodax ke alamat email indodax anda")

var email = User.getProperty("email_indodax")

Bot.sendMessage({chat_id:524550302,text:"<=> • ID pelanggan : `"+user.telegramid+"`\n<=> • Jumlah voucher: Rp `"+rupiah+"`\n<=> • Email: `"+email+"`\n\nKirim notifikasi : `/kirimnotif "+user.telegramid+"`"})

Api.sendMessage({chat_id:"@zonachanger", text:"Invoice Transaksi\n\n• ID Transaksi: `"+user.telegramid+"`\n• Transaksi: `Beli Voucher Indodax`\n• Nominal: Rp `"+rupiah+"`\n• Tanggal: `"+time+"` WIB", parse_mode:"Markdown"})

var poin_user = Libs.ResourcesLib.userRes("poin")
poin_user.add(1)
var transaksi_p =Libs.ResourcesLib.anotherChatRes("total", "transaksi")
transaksi_p.add(1)
var total = Libs.ResourcesLib.userRes("total_transaksi")
total.add(1)
let balance = Libs.ResourcesLib.userRes("saldo")
//balance.add(get_idr)

let volume_user = Libs.ResourcesLib.userRes("volume")

var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi")

volume_user.add(nominal)
volume_transaksi.add(nominal)

let referrer = Libs.ReferralLib.currentUser.attractedByUser();
if(referrer){
  
  let referrerRes = Libs.ResourcesLib.anotherUserRes("saldo", referrer.telegramid);
let pion = Libs.ResourcesLib.anotherUserRes("affiliasi", referrer.telegramid)

let refcom = nominal * 0.0005;
  pion.add(refcom);
  referrerRes.add(refcom);

}

var newGet ={
    'Tgl':time,
    'Username':user.username,
    'User ID': user.telegramid,
    'Transaksi': "Beli Voucher",
    'Transaksi ID': "-",
    'Nominal' : nominal,
    'Biaya': "-"
}

let tsn = {
  sheetName: "zonachanger",
  row: newGet,
  onSuccess: "/___",
  onError: "__0_"
}

Libs.GoogleSpreadSheet.addRow(tsn)

Bot.runCommand("/kurangin")
return
}else{
Bot.sendMessage("⚠️ Invalid command")

}

Bot.sendMessage("😥 Invalid Command")
