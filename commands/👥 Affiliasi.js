/*CMD
  command: 👥 Affiliasi
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
Api.sendChatAction({chat_id:chat.chatid, action:'typing'})
var pemilik = User.getProperty("nama_pemilik")
if(pemilik == undefined){

Bot.sendInlineKeyboard([{title:"Set Account", command:"/edit_akun_lagi"}],"Silahkan perbaharui info akun anda terlebih dahulu!",{on_result:"/otw"})


return
}


let affiliasi = Libs.ResourcesLib.userRes("affiliasi")

var rupiah =affiliasi.value().toLocaleString('EN-en')

var link = Libs.ReferralLib.currentUser.getRefLink("zonachangerbot",+user.telegramid)


refList = Libs.ReferralLib.currentUser.refList.get();

if(refList.length>=0){
  totalRef = refList.length;
  for(i in refList){
    user = refList[i];
  }
}else{
  totalRef = "0";
}


Bot.sendInlineKeyboard([{title:"👥 Daftar Affiliasi", command:"/daftar_affiliasi"}],"*PROGRAM AFFILIASI*\n\n<=> ✦ Total affiliasi: `"+totalRef+"` Affiliasi\n<=> ✦ Penghasilan anda: Rp `"+rupiah+"`\n<=> ✦ Link affiliasi: [Affiliasi Link]("+link+")\n<=> ✦ Komisi Affiliasi: `0.05%`",{disable_web_page_preview:true,on_result:"/otw"})
