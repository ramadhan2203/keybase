/*CMD
  command: Bank lokal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

Bot.sendKeyboard("🔙 Kembali","*PERHATIAN*\n\n<=> ✦ Email: `zonachanger@gmail.com`\n<=> ✦ Minimal Jual: Rp `30,000`\n\nEmail penerima wajib di isi saat pembuatan voucher Indodax\nSilahkan masukan kode Voucher Indodax disini 🔻")

Bot.runCommand("/bank_lokal")
