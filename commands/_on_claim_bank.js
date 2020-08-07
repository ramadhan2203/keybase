/*CMD
  command: /on_claim_bank
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
var voucher = User.getProperty("voucher_bank")
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 

if(error == "Invalid token"){
Bot.runCommand("/refresh_access_token")
Bot.run({
command:"/voucher_bank",
run_after:2
})
return
}

if (error=="Voucher salah."){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf Kode voucher salah !!")
return
}

if(error=="Voucher sudah pernah digunakan!"){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf Kode voucher sudah pernah digunakan!!")
return
}


var message = json.message
var int = json.amount
var amount = parseInt(int)

var tp_transaksi = Libs.ResourcesLib.anotherChatRes("total", "transaksi")

//tp_transaksi.add(1)

if(amount<30000){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Jual voucher anda kurang dari Rp 30,000, Nominal Voucher anda kami kreditkan ke saldo anda")
var saldo= Libs.ResourcesLib.userRes("saldo")
var bal = amount-1000
saldo.add(bal)

return
}

var biaya = 10000
var biaya_rp = biaya.toLocaleString('EN-en')

var rupiah = amount.toLocaleString('EN-en')
var fee = amount-10000
var fee_rp = fee.toLocaleString('EN-en')

var basic = amount*0.25
var pro = basic/100
var total_basic = amount-pro
var total_rp = total_basic.toLocaleString('EN-en')
var biaya_pro = pro.toLocaleString('EN-en')


if(amount<3000000){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})
User.setProperty("amount_voc_bank", fee, "float")

User.setProperty("fee_bank", biaya, "integer")

Bot.sendKeyboard("🔙 Kembali","Voucher Berhasil di cairkan\n\n<=> ✦ Nominal voucher: Rp `"+rupiah+"`\n<=> ✦ Fee layanan: Rp `10,000`\n<=> ✦ Nominal transfer: Rp `"+fee_rp+"`\n\n[List kode BANK](https://telegra.ph/KODE-BANK-INDONESIA-06-28)\nSilahkan masukan kode bank anda 🔻",{disable_web_page_preview:true})

Bot.runCommand("kode_bank")

return
}

if(amount>3000000){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

User.setProperty("amount_voc_bank", total_basic, "float")
User.setProperty("fee_bank", pro, "integer")

Bot.sendKeyboard("🔙 Kembali","Voucher Berhasil di cairkan\n\n<=> ✦ Nominal voucher: Rp `"+rupiah+"`\n<=> ✦ Fee layanan: Rp `"+biaya_pro+"`\n<=> ✦ Nominal transfer: Rp `"+total_rp+"`\n\n[List kode BANK](https://telegra.ph/KODE-BANK-INDONESIA-06-28)\nSilahkan masukan kode bank anda 🔻",{disable_web_page_preview:true})

Bot.runCommand("kode_bank")
return
}
