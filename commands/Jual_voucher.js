/*CMD
  command: Jual_voucher
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/



var json = JSON.parse(data.content)
var rupe = json.balance
var int = parseInt(rupe)-4000


//Bot.sendMessage(inspect(json))
Bot.sendKeyboard("Bank lokal, E-Money,\n🔙 Kembali", "*JUAL VOUCHER*\n\n<=> • Maksimal Jual: Rp `"+int.toLocaleString('EN-en')+"`\n<=> • Minimal jual: Rp `30,000`\n<=> • Email: `zonachanger@gmail.com`\n\nWajib mengisi email penerima saat pembuatan voucher Indodax\n\n[Tutorial Transaksi](https://telegra.ph/TUTORIAL-TRANSAKSI-JUAL-VOUCHER-07-05) & [Ketentuan Transaksi](https://telegra.ph/SYARAT-DAN-KETENTUAN-TRANSAKSI-JACKCHANGER-07-05) \n\nSilahkan pilih layanan Jual Voucher 🔻",{disable_web_page_preview:true})


