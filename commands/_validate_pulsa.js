/*CMD
  command: /validate_pulsa
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

if(message=="🔙 Kembali"){
Bot.runCommand("/start")

return
}

var telkomsel = Bot.getProperty("badUsers", { list: {} });
var validate = data.message.slice(0,4)
var telkom= telkomsel.list[validate];

var axis = {"list": {"0831": true,"0832": true,"0833": true,"0821": true,"0838": true}}

var indosat = {"list": {"0814": true,"0815": true,"0816": true,"0856": true,"0857": true, "0858":true}}

var xl = {"list": {"0817": true,"0818": true,"0819": true,"0859": true,"0877": true,"0879": true,"0878":true}}

var smartfren = {"list": {"0881": true,"0882": true,"0883": true,"0884": true,"0885": true,"0886": true,"0887":true,"0888":true, "0889":true}}

var three = {"list": {"0895": true,"0896": true,"0897": true,"0898": true,"0899": true}}

var telkom= telkomsel.list[validate]
var axs = axis.list[validate] 
var ind = indosat.list[validate]
var smart = smartfren.list[validate]
var xxl = xl.list[validate]
var thre = three.list[validate]

if(telkom==true){
User.setProperty("nomer", data.message,"text")
Bot.runCommand("Telkom_pulsa")
return
}
if(axs==true){
User.setProperty("nomer", data.message,"text")
Bot.runCommand("Axis_pulsa")
return
}
if(thre==true){
User.setProperty("nomer", data.message,"text")
Bot.runCommand("Three_pulsa")
return
}
if(smart==true){
User.setProperty("nomer", data.message,"text")
Bot.runCommand("Smart_pulsa")
return
}
if(ind==true){
User.setProperty("nomer", data.message,"text")
Bot.runCommand("Indosat_pulsa")
return
}
if(xxl==true){
User.setProperty("nomer", data.message,"text")
Bot.runCommand("Xl_pulsa")
return
}
//Bot.sendMessage("😥 Mohon maaf Nomer Hp salah !!")
Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support","Mohon maaf No HP yang anda masukan tidak terdaftar!!",{disable_web_page_preview:true})
return

