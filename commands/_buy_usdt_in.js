/*CMD
  command: /buy_usdt_in
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 
var usdt = json.ticker.sell

var amount = User.getProperty("idr_usdt")

var jumlah = amount/usdt
var rupiah = amount.toLocaleString('EN-en')
var wallet = User.getProperty("wallet_usdt")

var fee = amount+10000
var min = fee/usdt
var biaya = fee.toLocaleString('EN-en')

Bot.sendMessage("*LAYANAN BELI USDT*\n\n=> Beli: "+min+" USDT => Rp "+biaya+"\n=> Terima: "+jumlah.toFixed(2)+" USDT => Rp "+rupiah+"\n=> Fee admin: Rp 10,000\n=> Walet: *"+wallet+"*\n\nSilahkan tunggu, transaksi anda di proses secara manual, kami akan mengirimkan bukti transaksi di pesan selanjutnya")


Bot.sendMessage({chat_id:524550302,text:"=> User ID : `"+user.telegramid+"`\n=> Beli USDT: "+jumlah.toFixed(2)+"\n=> address: `"+wallet+"`\n\nKirim notifikasi : `/kirimcoin "+user.telegramid+"`"})

Api.sendMessage({chat_id:"@jackchanger", text:"=> Transaksi ID: *JT-"+user.telegramid+"*\n=> Method: *BELI USDT*\n=> Nominal: *"+min+" USDT*\n=> Date: *"+time+" WIB*", parse_mode:"Markdown"})

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

volume_user.add(fee)
volume_transaksi.add(fee)

let referrer = Libs.ReferralLib.currentUser.attractedByUser();
if(referrer){
  
  let referrerRes = Libs.ResourcesLib.anotherUserRes("saldo", referrer.telegramid);
let pion = Libs.ResourcesLib.anotherUserRes("affiliasi", referrer.telegramid)

let refcom =fee * 0.0005;
  pion.add(refcom);
  referrerRes.add(refcom);

}

var newGet ={
    'Tgl':time,
    'Username':user.username,
    'User ID': "JT-"+user.telegramid,
    'Transaksi': "Beli USDT",
    'Transaksi ID': "-",
    'Nominal' : fee,
    'Biaya': 10000
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
