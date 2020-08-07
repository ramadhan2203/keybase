/*CMD
  command: Buy Coin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var date = new Date().toLocaleString("en-US", {timeZone: "Asia/jakarta"});
let time = Libs.DateTimeFormat.format(date, "HH" )

var date_ = Libs.DateTimeFormat.format(date, "dd-mm-yyyy HH:MM:ss" )
var id = parseInt(time)



var buttons = [
[{title :"USDT", command:"/usdt_now"},
{title:"ETH", command:"/eth_now"}],
[{title:"BTC",command:"/btc_now"},
{title:"DOGE", command:"/doge_now"}]
]

var message = "Pembelian coin cryptocurrency\n\n=> Produk ini diproses secara manual\n=> Produk tersedia pukul *08.00-21.00 WIB*\n=> Transaksi di luar jam,di proses dihari berikutnya.\n=> Fee dan biaya kirim di tanggung admin\n=> Pastikan address penerima benar\n\nKesalahan address penerima, sepenuhnya menjadi tanggung jawab pembeli."


if(id>21){

Bot.sendMessage("😥 Mohon maaf layanan ini hanya tersedia pukul 08.00 WIB s.d 21.00 WIB")
return
}

if(id<8){

Bot.sendMessage("😥 Mohon maaf layanan ini hanya tersedia pukul 08.00 WIB s.d 21.00 WIB")
return
}


//Bot.sendInlineKeyboard(buttons,message,{on_result:"/otw"})

Bot.sendMessage("😥 Layanan sedang maintenance")
