/*CMD
  command: /buy_alls
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="notif"){
var json = JSON.parse(data.content)

let price = User.getProperty("price_pulsa")


amount = parseInt(price)

let balance= Libs.ResourcesLib.userRes("saldo")

balance.remove(amount)
var rupiah = balance.value().toLocaleString('EN-en')

if(json.status==false){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf "+json.message+"")
balance.add(amount)
return
}
var id = json.results.id
var nomer_hp = json.results.no_hp

let get = User.setProperty("id", id,"string")

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "ID Transaksi `"+id+"` Nomer pengisian `"+nomer_hp+"` sedang dalam proses.")

Bot.run({
command:"/notif_all",
run_after:3
})
return
}


let nomer = User.getProperty("nomer")
let pro = User.getProperty("product")
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})


HTTP.post({
url: "https://zonakuota.com/api/v2/order",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"quantity=1&app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&id_plgn=&auth_username=AZIZARCELL&voucher_id="+pro+"&payment=balance&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02&phone="+nomer,
success:"/buy_alls notif"
//background: true

})

