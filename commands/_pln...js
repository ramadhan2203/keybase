/*CMD
  command: /pln..
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// if(params=="pln"){

// Api.sendChatAction({
// chat_id:chat.chatid,
// action:"typing"})

// var json = JSON.parse(data.content)

// if(json.success==false){

// Bot.sendMessage("😥 Mohon maaf produk sedang gangguan")
// return
// }

// var fee = 1250
// var result =json["vouchers_by_id"].results
// function pr(index){
// return Number(result[index].price)+fee
// }
// function des(index){
// return String(result[index].description)
// }

// function name(index){
// return String(result[index].provider.name).toUpperCase()
// }
// function id(index){
// return Number(result[index].id)
// }
// function nama(index){
// return String(result[index].name).replace("Token", "")
// }
var buttons= [
[{title:"PLN Rp 20", command:"/pln 1597"},
{title:"PLN Rp 50", command:"/pln 1596"}],
[{title:"PLN Rp 100", command:"/pln 1595"},
{title:"PLN Rp 200", command:"/pln 1598"}],
[{title:"PLN Rp 500", command:"/pln 1594"},
{title:"PLN Rp 1000", command:"/pln 1593"}]
]
Bot.sendInlineKeyboard(buttons,"Silahkan pilih Nominal 🔻",{on_result:"/otw"})
return
//Bot.sendMessage("*PRODUCT "+name(0)+"*\n\n<=> • *"+nama(0)+"*\n<=> • Harga: Rp `"+pr(0).toLocaleString('EN-en')+"`\n<=> • Format beli: /pln20\n\n<=> • *"+nama(1)+"*\n<=> • Harga: Rp `"+pr(1).toLocaleString('EN-en')+"`\n<=> • Format beli: /pln50\n\n<=> • *"+nama(2)+"*\n<=> • Harga: Rp `"+pr(2).toLocaleString('EN-en')+"`\n<=> • Format beli: /pln100\n\n<=> • *"+nama(3)+"*\n<=> • Harga: Rp `"+pr(3).toLocaleString('EN-en')+"`\n<=> • Format beli: /pln200\n\n<=> • *"+nama(4)+"*\n<=> • Harga: Rp `"+pr(4).toLocaleString('EN-en')+"`\n<=> • Format beli: /pln500\n\n<=> • *"+nama(5)+"*\n<=> • Harga: `Rp "+pr(5).toLocaleString('EN-en')+"`\n<=> • Format beli: /pln1000")

// return
// }
// Api.sendChatAction({
// chat_id:chat.chatid,
// action:"typing"})


// HTTP.post({
// url: "https://zonakuota.com/api/v2/get",
// headers:{
// "content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
// },
// body:
// "app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&auth_username=AZIZARCELL&requests%5Bvouchers_by_id%5D%5Bid%5D=%2C1597%2C1596%2C1595%2C1598%2C1594%2C1593%2C2442&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02"
// ,
// success:"/pln.. pln"
// //background: true

// })
