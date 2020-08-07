/*CMD
  command: /cek_saldo
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
//var tambah = arr[1]

//var amount = parseFloat(tambah)
var saldo = Libs.ResourcesLib.anotherUserRes("saldo", id)
var rup =saldo.value().toLocaleString('EN-en')
Bot.sendMessage("Saldo Akun ["+id+"](tg://user?id="+id+") Rp "+rup)




//if(!tambah){
//Bot.sendMessage(saldo.val
//saldo.add(amount)
//Bot.sendMessage(saldo.value())

//}

//if(tambah<0){

//saldo.remove(amount)

//Bot.sendMessage(saldo.value())
//return
//}
}
