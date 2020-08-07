/*CMD
  command: /cek_buying
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var saldo = Libs.ResourcesLib.userRes("saldo")
var price = User.getProperty("harga_plnid")
var Id = User.getProperty("id_pelanggan")
var Idpln = User.getProperty("id_buy_pln")

if(saldo.value()<price){
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf saldo anda tidak mencukupi untuk melakukan transaksi ini")

return
}

saldo.remove(price)
//Bot.sendMessage("Transaksi sedang di Proses, mohon tunggu notifikasi selanjutnya")
HTTP.post({
url: "https://zonakuota.com/api/v2/order",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"quantity=1&app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&id_plgn="+Id+"&phone=083873563833&auth_username=AZIZARCELL&voucher_id="+Idpln+"&payment=balance&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02"
,
success:"/on_pln"
//background: true

})

return
