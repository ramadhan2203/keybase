/*CMD
  command: Internet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var saldo = Libs.ResourcesLib.userRes("saldo")
var rupiah = saldo.value().toLocaleString('EN-en')

Bot.sendKeyboard("Axis data, Xl data, Indosat data,\nTelkom data, Three data, Smart data,\n🔙 Kembali","Hindari Transaksi kuota internet diatas jam `23.00 - 01.00` WIB, untuk meminimalisir kegagalan transaksi!",{on_result:"/otw"})
