/*CMD
  command: /on_tf_bank
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var edit = "📝 Edit";
var konfirm = "✅ Konfirmasi";

if(data.message==edit){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
Bot.sendKeyboard("🔙 Kembali","List kode BANK lihat [disini](https://telegra.ph/KODE-BANK-INDONESIA-06-28)\nSilahkan masukan kode bank anda 🔻",{disable_web_page_preview:true});

Bot.runCommand("kode_bank");

return
}

if(data.message==konfirm){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
var kode = User.getProperty("kode_bank");
var no_rek = User.getProperty("no_rek_bank");
var email = User.getProperty("email_indodax");

var amount = User.getProperty("amount_voc_bank");
var rupiah = amount.toLocaleString('EN-en');
var trx = Libs.Random.randomInt(1000000, 100000000000);

User.setProperty("trx_id_", trx,"integer");

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","`Processing...`");

Api.sendChatAction({
chat_id:chat.chatid, action:"typing"});
HTTP.post({
url: "https://partner.oyindonesia.com/api/remit",
headers:{
"Content-Type" : "application/json",
"Acept" :"application/json",
"X-OY-Username": "jtchanger",
"X-Api-Key": "2e5d928f-33bb-473c-9691-4e2d85391a1c"
},
body:{"recipient_bank": kode, "recipient_account": no_rek,
"amount": amount.toFixed(0),
"note":"ZONACHANGER™️",
"partner_trx_id":trx,
"email": "" },
success:"on_tf"
//bacground:true
});

return
}

Api.sendChatAction({chat_id:chat.chatid, action:"typing"});
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Invalid command",{on_result:"/otw"});
return
