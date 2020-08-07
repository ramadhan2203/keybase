/*CMD
  command: /beli_pulsa
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = User.getProperty("id_pulsa_tr")
var nomer = User.getProperty("nomer")

if(data.message=="🔙 Kembali"){
Bot.runCommand("🔙 Kembali")
return
}

if(data.message=="✅ Beli"){
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

HTTP.post({
url: "https://zonakuota.com/api/v2/order",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"quantity=1&app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&id_plgn=&auth_username=AZIZARCELL&voucher_id="+id+"&payment=balance&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02&phone="+nomer,
success:"/beli_pulsa_notif"

})
return
}

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf format yang anda masukan salah!", {on_result:"/otw"})

