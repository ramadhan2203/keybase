/*CMD
  command: /kirimnotif
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  let id = arr[0];
  var voc = arr[1];
Bot.sendMessage({chat_id:id, text:"*LAYANAN VOUCHER INDODAX*\n\n=> Voucher telah berhasil dikirimkan kealamat email anda\n\n=> Kode voucher: `"+voc+"`"})

Bot.sendMessage("SUCCESS")

return
}

