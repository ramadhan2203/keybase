/*CMD
  command: Indosat_data
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="2"){
var json = JSON.parse(data.content)
if(json.success==false){

Bot.sendMessage("😥 Mohon maaf produk sedang gangguan")
return
}

var fee = 2599
var result =json["vouchers_by_id"].results
function pr(index){
return Number(result[index].price)+fee
}
function des(index){
return String(result[index].description)
}

function name(index){
return String(result[index].provider.name).toUpperCase()
}
function id(index){
return Number(result[index].id)
}
function nama(index){
return String(result[index].name)
}
Bot.sendMessage("*PRODUCT "+name(0)+"*\n\n- "+nama(0)+"\n- Price: *Rp "+pr(0).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(0)+"`\n\n- "+nama(1)+"\n- Price: *Rp "+pr(1).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(1)+"`\n\n- "+nama(2)+"\n- Price: *Rp "+pr(2).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(2)+"`\n\n- "+nama(3)+"\n- Price: *Rp "+pr(3).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(3)+"`\n\n- "+nama(4)+"\n- Price: *Rp "+pr(4).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(4)+"`\n\n- "+nama(5)+"\n- Price: *Rp "+pr(5).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(5)+"`\n\n- "+nama(6)+"\n- Price: *Rp "+pr(6).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(6)+"`\n\n- "+nama(7)+"\n- Price: *Rp "+pr(7).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(7)+"`\n\n- "+nama(8)+"\n- Price: *Rp "+pr(8).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(8)+"`\n\n- "+nama(9)+"\n- Price: *Rp "+pr(9).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(9)+"`\n\n- "+nama(10)+"\n- Price: *Rp "+pr(10).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(10)+"`\n\n- "+nama(11)+"\n- Price: *Rp "+pr(11).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(11)+"`\n\n- "+nama(12)+"\n- Price: *Rp "+pr(12).toLocaleString('EN-en')+"*\n- Format beli: `/data "+id(12)+"` ")

//Bot.sendMessage(inspect(json))
return
}



Api.sendChatAction({chat_id:chat.chatid,action:"typing"})


HTTP.post({
url: "https://zonakuota.com/api/v2/get",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&auth_username=AZIZARCELL&requests%5Bvouchers_by_id%5D%5Bid%5D=%2C2074%2C1646%2C1645%2C1647%2C1148%2C1648%2C1x650%2C1651%2C1652%2C1653%2C2243%2C1155%2C1654%2C1412&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02"
,
success:"Indosat_data 2"
//background: true

})

