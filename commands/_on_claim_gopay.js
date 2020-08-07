/*CMD
  command: /on_claim_gopay
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
var voucher = User.getProperty("voucher_gopay")
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 

if(error == "Invalid token"){
Bot.runCommand("/refresh_access_token")
Bot.run({
command:"/voucher_gopay",
run_after:2
})

return
}

if(error=="Voucher salah."){

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Maaf kode voucher yang anda masukan salah !!",{on_result:"/otw"})
return
}

if(error=="Voucher sudah pernah digunakan!"){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf Kode voucher sudah pernah digunakan!!",{on_result:"/otw"})
return
}


var message = json.message
var int = json.amount
var amount = parseInt(int)

var tp_transaksi = Libs.ResourcesLib.anotherChatRes("total", "transaksi")

//tp_transaksi.add(1)

if(amount<30000){

    Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Mohon maaf Nominal jual voucher anda kurang dari Rp 30,000", {on_result:"/otw"})

return
}

var biaya = 10000
var biaya_rp = biaya.toLocaleString('EN-en')

var rupiah = amount.toLocaleString('EN-en')
var fee = amount-10000
var fee_rp = fee.toLocaleString('EN-en')

var basic = amount*0.6
var pro = basic/100
var total_basic = amount-pro
var total_rp = total_basic.toLocaleString('EN-en')
var biaya_pro = pro.toLocaleString('EN-en')


if(amount<3000000){
var o = User.setProperty("amount_voucher_dana", fee, "integer")
var i = User.setProperty("fee_bank", biaya, "integer")

Bot.sendKeyboard("🔙 Kembali","Voucher berhasil di cairkan!\n\n<=> • Nominal voucher: Rp `"+rupiah+"`\n<=> • Fee layanan: Rp `10,000`\n<=> • Nominal transfer: Rp `"+fee_rp+"`\n\nSilahkan masukan nomer GO-PAY anda 🔻",{disable_web_page_preview:true})

Bot.runCommand("/on_gopay_tf")

return
}

if(amount>3000000){
var op = User.setProperty("amount_voucher_dana", total_basic, "integer")
var io = User.setProperty("fee_bank", pro, "integer")

Bot.sendKeyboard("🔙 Kembali","Voucher berhasil dicairkan!\n\n<=> • Nominal voucher: Rp `"+rupiah+"`\n<=> • Fee layanan: Rp `"+biaya_pro+"`\n<=> • Nominal transfer: Rp `"+total_rp+"`\n\nSilahkan masukan nomer GO-PAY anda 🔻",{disable_web_page_preview:true})

Bot.runCommand("/on_gopay_tf")
return
}
