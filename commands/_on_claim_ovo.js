/*CMD
  command: /on_claim_ovo
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
var voucher = User.getProperty("voucher_ovo")

Api.sendChatAction({chat_id:chat.chatid,action:'typing'})

var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});

let time = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM:ss" ) 

if(error == "Invalid token"){
Bot.runCommand("/refresh_access_token")
Bot.run({
command:"/voucher_ovo",
run_after:2
})

return
}

if(error=="Voucher salah."){

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf, kode voucher yang anda masukan salah !!",{on_result:"/otw"})
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

    Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Jual voucher anda kurang dari Rp 30,000",{on_result:"/otw"})

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
var o = User.setProperty("amount_voucher_ovo", fee, "integer")
var i = User.setProperty("fee_bank", biaya, "integer")

Bot.sendKeyboard("🔙 Kembali","Voucher Indodax berhasil di cairkan !\n\n<=> • Nominal voucher: Rp `"+rupiah+"`\n<=> • Fee layanan: Rp `10,000`\n<=> • Nominal transfer: Rp `"+fee_rp+"`\n\nSilahkan masukan nomer OVO anda 🔻",{on_result:"/otw",disable_web_page_preview:true})

Bot.runCommand("/on_ovo_tf")

return
}

if(amount>3000000){

var op = User.setProperty("amount_voucher_ovo", total_basic, "integer")
var io = User.setProperty("fee_bank", pro, "integer")

Bot.sendKeyboard("🔙 Kembali","Voucher Indodax berhasil di cairkan!\n\n<=> • Nominal voucher: Rp `"+rupiah+"`\n<=> • Fee layanan: Rp `"+biaya_pro+"`\n<=> • Nominal transfer: Rp `"+total_rp+"`\n\nSilahkan masukan nomer OVO anda 🔻",{on_result:"/otw", disable_web_page_preview:true})

Bot.runCommand("/on_ovo_tf")
return
}
