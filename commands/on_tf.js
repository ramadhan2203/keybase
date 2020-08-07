/*CMD
  command: on_tf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var json = JSON.parse(data.content)
var date = new Date().toLocaleString("en-US",{timeZone: "Asia/jakarta"});
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 
//Bot.sendMessage(inspect(json))

var trx = User.getProperty("trx_id_")
var trx_id = json.trx_id

var nom = User.getProperty("fee_bank")
var nominal = parseInt(nom)-3500
var voucher = nominal.toLocaleString('EN-en')

Bot.sendMessage("Transaksi ID `"+trx+"` sedang dalam proses antrian, silahkan tunggu pesan notifikasi selanjutnya untuk status transaksi anda")

Bot.run({
command:"/notif_bank",run_after:3})

var amount = json.amount
var idr = parseInt(amount)
var biaya = nominal+idr
var biaya_total = nominal
//var format1 = idr.toLocaleString('EN-en')
//var format2 = biaya.toLocaleString('EN-en')
//var format3 = fee.toLocaleString('EN-en')
var transaksi_p = Libs.ResourcesLib.anotherChatRes("total", "transaksi")
transaksi_p.add(1)
var total = Libs.ResourcesLib.userRes("total_transaksi")
total.add(1)
//let balance = Libs.ResourcesLib.userRes("saldo")
//balance.add(biaya)

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
Api.sendMessage({chat_id:"@zonachanger", text:"INVOICE TRANSAKSI\n\n✦ ID Transaksi: `"+trx+"`\n✦ Destinasi: `"+json.recipient_bank+"`\n✦ Tujuan: `"+json.recipient_account.slice(0,5)+"XXXXX`\n✦ Nominal Transaksi: Rp `"+amount.toLocaleString('EN-en')+"`\n✦ Tanggal: `"+time+"`\n\nThanks for using [zonachangerbot](https://t.me/zonachangerbot)", parse_mode:"Markdown",disable_web_page_preview:true})

var newGet ={
    'Tgl':time,
    'Username':user.username,
    'User ID': user.telegramid,
    'Transaksi': "TRANSFER BANK",
    'Transaksi ID': trx,
    'Nominal' : biaya,
    'Biaya': nominal
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


