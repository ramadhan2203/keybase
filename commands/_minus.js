/*CMD
  command: /minus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  var id = arr[0]
var amount = arr[1]

amount = parseFloat(amount)


var code = arr[1].slice(0,1)


if(arr[1].slice(0,1)=="-"){
var amount = parseFloat(arr[1].replace("-",""))
var saldo = Libs.ResourcesLib.anotherUserRes("saldo", id)

var rup = saldo.value().toLocaleString('EN-en')

saldo.remove(amount)

Bot.sendMessage("SUCCESS remove Rp `"+amount.toLocaleString('EN-en')+"` from account ["+id+"](tg://user?id="+id+")")
return
}else{

var saldo = Libs.ResourcesLib.anotherUserRes("saldo", id)

var rup = saldo.value().toLocaleString('EN-en')

saldo.add(amount)

Bot.sendMessage("SUCCESS Add Rp `"+amount.toLocaleString('EN-en')+"` for account ["+id+"](tg://user?id="+id+") ")
}
}

