/*CMD
  command: Axis_data
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var json = JSON.parse(data.content)


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
Bot.sendMessage("*PRODUCT "+name(0)+"*\n\n<=> ✦ "+nama(0)+"\n<=> ✦  Price: Rp `"+pr(0).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(0)+"`\n\n<=> ✦ "+nama(1)+"\n<=> ✦ Price: `Rp "+pr(1).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(1)+"`\n\n<=> ✦ "+nama(2)+"\n<=> ✦ Price: Rp `"+pr(2).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(2)+"`\n\n<=> ✦ "+nama(3)+"\n<=> ✦ Price: Rp `"+pr(3).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(3)+"`\n\n<=> ✦ "+nama(4)+"\n<=> ✦ Price: Rp `"+pr(4).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(4)+"`\n\n<=> ✦ "+nama(5)+"\n<=> ✦ Price: Rp `"+pr(5).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(5)+"`\n\n<=> ✦ "+nama(6)+"\n<=> ✦ Price: Rp `"+pr(6).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(6)+"`\n\n<=> ✦ "+nama(7)+"\n<=> ✦ Price: Rp `"+pr(7).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(7)+"`\n\n<=> ✦ "+nama(8)+"\n<=> ✦ Price: Rp `"+pr(8).toLocaleString('EN-en')+"`\n<=> ✦ Format beli: `/data "+id(8)+ "`")
//Bot.sendMessage(inspect(result))
return
