/*CMD
  command: /kirimcoin
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
  var usdt = arr[1];
  var txid = arr[3];
  var coin = arr[2];
Bot.sendMessage({chat_id:id, text:"Transaksi ID *JT-"+id+"*, beli *"+usdt+" "+coin.toUpperCase()+"* telah sampai ke wallet anda dengan txid `"+txid+"`"})

return
}

