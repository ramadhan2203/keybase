/*CMD
  command: 👤 Akun
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let validate = Libs.ResourcesLib.userRes("validate")
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})


let m = User.getProperty("msgid")

//Api.deleteMessage({chat_id:chat.chatid, message_id:m})

//if(validate.value()==0){
//Bot.sendMessage("😥 Yah akun kamu belum aktif, silahkan verifikasi akun kamu dengan ketik /validate")
//return
//}



var pemilik = User.getProperty("nama_pemilik")
if(pemilik == undefined){

Bot.sendInlineKeyboard([{title:"Set Account", command:"/edit_akun_lagi"}],"Silahkan perbaharui info akun anda terlebih dahulu!",{on_result:"/otw"})

return
}
var email = User.getProperty("email_indodax").toLowerCase()
var bank = User.getProperty("nama_bank").toUpperCase()
var rekening= User.getProperty("no_rekening")

var an = User.getProperty("nama_pemilik").toUpperCase()
var saldo = Libs.ResourcesLib.userRes("saldo")
var poin = Libs.ResourcesLib.userRes("poin")
var total = Libs.ResourcesLib.userRes("total_transaksi")
let volume_user = Libs.ResourcesLib.userRes("volume")

var volume_transaksi = Libs.ResourcesLib.anotherChatRes("volume", "transaksi")

//var volume_poin = Libs.ResourcesLib.anotherUserRes("volume", "poin")
var poin_p = poin.value()*1000
var format = saldo.value().toLocaleString('EN-en')
var poin_format = poin_p.toLocaleString('EN-en')

var format4 = 
volume_user.value().toLocaleString('EN-en')
var buttons = [
        [{title:"Deposit", command:"/saldo"},
        {title:"Edit akun", command:"/edit_akun_lagi"}]
]
var symbol = '<>'
Bot.sendInlineKeyboard(buttons, "*INFORMASI AKUN*\n\n<=> ✦ ID pelanggan : `"+user.telegramid+"`\n<=> ✦ Saldo akun: Rp `"+format+"`\n\n<=> ✦ `"+bank+"`\n<=> ✦ `"+rekening+"`\n<=> ✦ `"+an+"`\n<=> ✦ `"+email+"`\n\n<=> ✦ Total transaksi: `"+total.value().toFixed(0)+"` Transaksi\n<=> ✦ Volume transaksi: Rp `"+format4+"`",{on_result:"/otw"})




