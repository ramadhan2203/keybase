/*CMD
  command: Pulsa
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//if(params=="I"){

//var json= JSON.parse(data.content)
//var balancep = json.balance.results.balance
//let rupiah_bal = balancep.toLocaleString('EN-en')
let balance = Libs.ResourcesLib.userRes("saldo")

var rupiah = balance.value().toLocaleString('EN-en')
Api.sendChatAction({chat_id:chat.chatid,action:'typing'})
Bot.sendKeyboard("🔙 Kembali", "Silahkan masukan nomer HP anda 🔻\nContoh `083873563833`",{on_result:"/otw"})

Bot.runCommand("/validate_pulsa")

//return
//}
//Bot.sendMessage("`Loading data...`")
//Api.sendChatAction({
//chat_id:chat.chatid,
//action:"typing"})

