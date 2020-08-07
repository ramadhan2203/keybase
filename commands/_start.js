/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var aggree = User.getProperty("aggreem")


//if(aggree==undefined){

//Bot.sendKeyboard("Setuju,\nTidak setuju","Syarat dan ketentuan bertransaksi di ZONACHANGER™️ :\n\n1. Semua pengguna yang bertransaksi di ZONACHANGER™️ di haruskan menggunakan rekening atas nama nya sendiri alias tidak memakai rekening orang lain.\n\n2. ZONACHANGER™️ berhak untuk menolak transaksi dengan alasan apapun apabila ternyata pengguna memakai rekening orang lain ketika bertransaksi.\n\n3. Untuk transaksi indodax, maka atas nama di akun indodax harus sama dengan atas nama di rekening.\n\n4. ZONACHANGER™️ dibebaskan dari segala jenis tuntutan kerugian apabila pengguna ceroboh ketika bertransaksi, termasuk jika pengguna salah mengirim nomor rekening, kesalahan ketika mengirim coin, atau tidak memasukan memo pada saat mengirim coin.\n\n5. ZONACHANGER™️ berhak untuk tidak melayani transaksi dengan tujuan tidak terpuji seperti untuk tujuan penipuan, phising, kriminal kegiatan hacking, money laundring dan kejahatan online lainya.\n\n6. Semua harga, kurs maupun biaya transaksi yang di bebankan kepada pengguna bersifat final, artinya tidak bisa di ganggu gugat.\n\n7. Transaksi di anggap selesai apabila ZONACHANGER™️ sudah mengirimkan bukti pembayaran kepada pengguna.\n\n8. Semua biaya transaksi produk yang tersedia di ZONACHANGER™️ tidak bisa digabung. Misalkan pengguna bertransaksi 5x maka biaya transaksi yang di bebankan kepada pengguna 5x juga. 1x transaksi = 1x biaya.\n\n9. Hati hati penipuan meng atas nama kan zonachanger dalam bentuk apapun, pastikan hanya bertransaksi dengan kontak yang sudah tertera di bot @jackchangerbot.\n\n10. ZONACHANGER™️ berhak menahan atau membatasi layanan, baik sementara maupun permanen, kepada pengguna jika ditemukan tindakan penyalahgunaan identitas, kecurangan atau aktivitas mencurigakan lainya.\n\n11. Dengan bertransaksi di ZONACHANGER™️ maka pengguna sepenuhnya dianggap telah memahami dan menyetujui semua aturan yang telah disebutkan. Sebagai mana telah di sebutkan, aturan dapat diubah sewaktu-waktu tanpa ada pemberitahuan terlebih dahulu.\n\nRangkasbitung, 22 juni 2020",{on_result:"/otw"})

//Bot.runCommand("/aggreement")


//}else{
Bot.runCommand("/joined")
//}

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  //Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  //Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  let balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.chatId)
let ref = Libs.ResourcesLib.anotherUserRes("ref", refUser.chatId)

//ref.add(1)


//Bot.sendMessageToChatWithId(refUser.chatId, 
    //"✅ Congratulations you got *1.00 TRONc*" );
}

function doAlreadyAttracted(){
  //Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);


function onAttracted(refUser){
  // access to Bonus Res of refUser
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid); // add 100 bonus for friend
}



