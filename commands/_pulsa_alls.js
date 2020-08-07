/*CMD
  command: /pulsa_alls
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

var price = result.price_str.replace("Rp ","")
var amount = parseInt(price.replace(".",""))

//Bot.sendMessage(inspect(json))

var status = result.status
var id= result.id
let balance= Libs.ResourcesLib.userRes("saldo")
var phone = result.phone
var name = result.voucher.name
var provider = result.provider.name
var info = result.sn
var date = result.date

if(status=="GAGAL"){

Bot.sendMessage("TRANSAKSI GAGAL\nID Transaksi `"+id+" "+provider+" "+name+"` Tanggal `"+date+"`.\n\nSaldo telah di kreditkan kembali ke akun anda!.")
balance.add(amount)
return
}

if(status=="IP"){

Bot.run({
command:"/pulsa_all",
run_after:2
})
return
}

if(status=="SUKSES"){

Bot.sendMessage("TRANSAKSI SUKSES\nID Transaksi `"+id+" "+provider+" "+name+"`, SN/REF `"+info+"` Tanggal `"+date+"` ")


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
    'Tgl':date,
    'Username':user.username,
    'User ID': user.telegramid,
    'Transaksi': name,
    'Transaksi ID': id,
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
}


