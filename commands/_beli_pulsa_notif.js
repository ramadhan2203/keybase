/*CMD
  command: /beli_pulsa_notif
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content)

if(json.status==false){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","⚠️ ` Mohon maaf "+json.message+"`")

return
}

//Bot.sendMessage(inspect(json))
var result = json.results

let amount = parseInt(result.harga+1000)

let balance= Libs.ResourcesLib.userRes("saldo")

balance.remove(amount)

var rupiah = balance.value().toLocaleString('EN-en')
var id = json.results.id
var nomer_hp = json.results.no_hp

var trans = User.setProperty("id", id,"string")


Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Transaksi anda sedang di proses, untuk cek status transaksi anda silahkan kunjungi tautan ini [zonachanger.com](https://zonachanger.000webhostapp.com/transaksi.php?id="+id+")",{disable_web_page_preview:true})

Api.sendMessage({chat_id:"@zonachanger", text:"INVOICE TRANSAKSI\n\n✦ ID Transaksi: `"+id+"`\n✦ Transaksi: `"+result.provider.nama+"`\n✦ Nominal: `"+result.voucher.nominal+"`\n✦ No pengisian: `"+nomer_hp.slice(0,5)+"XXXXXXX`\n✦Pembayaran: `Saldo Akun`\n✦ Tanggal: `"+result.tanggal+"`\n\nThanks for using [zonachangerbot](https://t.me/zonachangerbot)",
parse_mode:'Markdown',disable_web_page_preview:true})



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
    'Tgl':result.tanggal,
    'Username':user.username,
    'User ID': user.telegramid,
    'Transaksi': result.provider.nama,
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

