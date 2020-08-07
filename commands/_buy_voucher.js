/*CMD
  command: /buy_voucher
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let access_token = Bot.getProperty("access_token")
var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
let time = Libs.DateTimeFormat.format(date, "HH" )

var date_ = Libs.DateTimeFormat.format(date, "dd-mm-yyyy HH:MM:ss" )
var id = parseInt(time)

if(params=="1"){
var json = JSON.parse(data.content)
if(json.error_description == "Invalid token"){
Bot.runCommand("/refresh_token")

Bot.run({
command:"/buy_voucher",
run_after:2
})
return
}

var balance = json.balance.idr
var int = parseInt(balance)
var rupiah = int.toLocaleString('EN-en')
if(int<25000){

Bot.sendMessage("Stok voucher Indodax untuk saat ini sedang kosong, silahkan coba lagi nanti ya.")

return
}

var voucher = Bot.setProperty("stok_voucher", balance,"integer")

Bot.sendKeyboard("🔙 Kembali","Voucher Indodax\n\n<=> • Stok voucher Rp `"+rupiah+"`\n<=> • Result `"+date_+"`\n\n<=> • Minimal beli: Rp 25,000\n<=> • Maksimal beli: Rp `"+rupiah+"`\n<=> • Proses 5-20 menit\n\nLayanan tersedia hanya pukul 08.00 s.d 21.00 WIB\nSilahkan masukan jumlah voucher 🔻")

Bot.runCommand("/buy_voucher_on")
return
}
//Bot.sendMessage("`Loading data...`")
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

let url ="https://btcapi.net/mobileApiV1/req/get_info"

HTTP.post({
url:url,
headers:{
"content-type" : "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent":"androidclient",
},
body:
"access_token="+access_token+"&device_info=SM-J530Y%252C%2BAndroid%2B9%2B%2528API%2B28%2529%2B&device_id=bfe6420b12ca96d7a817ac9d2f1e1e8e650a76fbc6c059cea80a20d8a2b5fa9e&client=android&lang=indonesia&version=2.4.4&",
success:"/buy_voucher 1"
//background:true
})


