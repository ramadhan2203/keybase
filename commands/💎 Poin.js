/*CMD
  command: 💎 Poin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let validate = Libs.ResourcesLib.userRes("validate")


//if(validate.value()==0){
//Bot.sendMessage("😥 Yah akun kamu belum aktif, silahkan verifikasi akun kamu dengan ketik /validate")
//return
//}

var pemilik = User.getProperty("nama_pemilik")
if(pemilik == undefined){

Bot.sendInlineKeyboard([{title:"Set Account", command:"/edit_akun_lagi"}],"Silahkan perbaharui info akun anda terlebih dahulu!",{on_result:"/otw"})


return
}

var poin = Libs.ResourcesLib.userRes("poin")
var total = Libs.ResourcesLib.userRes("total_transaksi")
var poin_p = poin.value()*1000

var rupiah_poin = poin_p.toLocaleString('EN-en')
 


var buttons = [
         [{title:"💎 Redeem Poin",command:"/redeem_poin"}]
]

Bot.sendInlineKeyboard(buttons,"*INFORMASI POIN ANDA*\n\n<=> ✦ Jumlah poin: `"+poin.value().toFixed(0)+"` <=> Rp `"+rupiah_poin+"`\n<=> ✦ Minimal Redeem poin 10 Poin",{on_result:"/otw"})

