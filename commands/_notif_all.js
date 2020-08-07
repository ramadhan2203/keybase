/*CMD
  command: /notif_all
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="s"){
var json = JSON.parse(data.content)
var status = json.transaction_details.results.status
var result = json.transaction_details.results
let price = User.getProperty("price_pulsa")
var amount = parseInt(price)
var id_transaksi = result.id
let balance= Libs.ResourcesLib.userRes("saldo")
var phone = result.phone
var name = result.voucher.name.toUpperCase()
var provider = result.provider.name.toUpperCase()
var info = result.sn
var date = result.date

if(status=="RF"){

Bot.sendMessage("TRANSAKSI GAGAL\nID Transaksi `"+id_transaksi+" "+provider+" "+name+"` GAGAL, tanggal `"+date+"`\nSaldo telah di kembalikan ke akun anda!")
balance.add(amount)
return
}
if(status=="IP"){

Bot.run({
command:"/notif_all",
run_after:5
})
return
}
if(status=="OK"){

Bot.sendMessage("TRANSAKSI SUKSES\n`"+id_transaksi+" "+provider+" "+name+"` SN/REF `"+info+"` Tanggal `"+date+"`WIB !")

Api.sendMessage({chat_id:"@zonachanger", text:"INVOICE TRANSAKSI\n\n✦ ID Transaksi: `"+id_transaksi+"`\n✦ Transaksi: `"+provider+"`\n✦ Nominal: `"+name+"`\n✦ Nomer pengisian: `"+phone.slice(0,4)+"xxxxxxx`\n✦ Tanggal: `"+date+"` WIB", parse_mode:"Markdown"})

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
    'Transaksi ID': id_transaksi,
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
}



Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let id = User.getProperty("id")

HTTP.post({
url: "https://zonakuota.com/api/v2/get",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&auth_username=AZIZARCELL&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02&requests%5Btransaction_details%5D%5Bid%5D="+id
,
success:"/notif_all s"
//background: true

})

