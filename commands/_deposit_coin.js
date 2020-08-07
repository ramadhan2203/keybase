/*CMD
  command: /deposit_coin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({chat_id:chat.chatid, action:'typing'})
var m = User.getProperty("msgid")

var message = "*DEPOSIT COIN*\n\n<=> • Layanan ini di proses otomatis.\n<=> • Membutuhkan 3 konfirmasi jaringan 5-20 menit.\n<=> • Deposit anda akan terconvert ke saldo rupiah dan di kreditkan ke saldo anda secara otomati.\n\nSilahkan pilih jenis coin crypto currency 🔻"

var buttons =[
[{title:"TRX", command:"/get_trx"},
{title:"DOGE", command:"/get_doge"},
{title:"BNB", command:"/get_bnb"}]
]
Bot.editMessage(message,m)
Bot.editInlineKeyboard(buttons,m)

