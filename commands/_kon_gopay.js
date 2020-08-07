/*CMD
  command: /kon_gopay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(data.message=="📝 Edit"){

Bot.sendKeyboard("🔙 Kembali","Silahkan cek dan masukan kembali nomer GOPAY anda 🔻")

Bot.runCommand("/on_gopay_tf")

return
}

if(data.message=="✅ Konfirmasi"){
//var kode = User.getProperty("kode_bank")
var number = User.getProperty("number_emoney")
//var email = User.getProperty("email_indodax")

var amount = User.getProperty("amount_voucher_dana")
var rupiah = amount.toLocaleString('EN-en')
var trx = Libs.Random.randomInt(1000000, 100000000000);

User.setProperty("trx_id_", trx,"integer")


Api.sendChatAction({
chat_id:chat.chatid, action:"typing"})

HTTP.post({
url: "https://partner.oyindonesia.com/api/remit",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{"recipient_bank": "gopay", "recipient_account": number,
"amount": amount,
"note":"ZONACHANGER™️",
"partner_trx_id":trx,
"email": "" },
success:"/on_tf_gopay"
//bacground:true
})

return
}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Invalid command")
return
