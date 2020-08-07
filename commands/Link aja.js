/*CMD
  command: Link aja
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})

Bot.sendKeyboard("🔙 Kembali", "PERHATIAN\n\n<=> • Email penerima: `zonachanger@gmail.com`\n<=> • Minimal: Rp `30,000`\n\nEmail penerima wajib di isi saat penbuatan voucher indodax\nSilahkan Masukan Kode Voucher Indodax anda 🔻",{on_result:"/otw"})


Bot.runCommand("/on_link")
