/*CMD
  command: /in_trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

         

var json = JSON.parse(data.content)
var doge = json.ticker.last
//Bot.sendMessage(inspect(json))
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 


let wallet = options.address;
let currency = options.currency;
let amount = options.amount;
let fiat_amount = options.fiat_amount;
let fiat_currency = options.fiat_coin;
let fee = options.fee;
let txn_id = options.txn_id
var saldo = Libs.ResourcesLib.userRes("saldo")



var fee_idr = 1000
var Int = parseInt(amount)
var get_idr = Int*doge

if(get_idr<5000){

Bot.sendMessage("😥 Deposit anda kurang dari Rp 5,000")
return
}else{
var total_ = get_idr - fee_idr
var fee_rupiah = fee_idr.toLocaleString('EN-en')
var terima = get_idr.toLocaleString('EN-en')
var total_rupiah = total_.toLocaleString('EN-en')


Bot.sendMessage("✅ *DEPOSIT TRON DITERIMA*\n\n=> Jumlah TRON: *"+Int+" TRON*\n=> Kurs rupiah TRON: *Rp "+doge+"*\n*----------------------------------------*\n=> Deposit rupiah: *Rp "+terima+"*\n=> Fee: *Rp 1,000*\n=> Terima bersih: *Rp "+total_rupiah+"*")


var transaksi_p =Libs.ResourcesLib.anotherChatRes("total", "transaksi")
transaksi_p.add(1)
var total = Libs.ResourcesLib.userRes("total_transaksi")
total.add(1)
let balance = Libs.ResourcesLib.userRes("saldo")
balance.add(get_idr)

let volume_user = Libs.ResourcesLib.userRes("volume")

var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi")

volume_user.add(get_idr)
volume_transaksi.add(get_idr)

let referrer = Libs.ReferralLib.currentUser.attractedByUser();
if(referrer){
  
  let referrerRes = Libs.ResourcesLib.anotherUserRes("saldo", referrer.telegramid);
let pion = Libs.ResourcesLib.anotherUserRes("affiliasi", referrer.telegramid)

let refcom = get_idr * 0.0005;
  pion.add(refcom);
  referrerRes.add(refcom);

}
Api.sendMessage({chat_id:"@jackchanger", text:"=> Transaksi ID: *JT-"+user.telegramid+"*\n=> Method: *DEPOSIT TRON*\n=> Nominal: *Rp "+terima+"*\n=> Date: *"+time+" WIB*", parse_mode:"Markdown"})

var newGet ={
    'Tgl':time,
    'Username':user.username,
    'User ID': "JT-"+user.telegramid,
    'Transaksi': "Deposit TRON",
    'Transaksi ID': "-",
    'Nominal' : get_idr,
    'Biaya': fee_idr
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
}

