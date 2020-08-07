/*CMD
  command: 🛂 Support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
    chat_id:chat.chatid,
    action:'typing'
})

Bot.sendMessage("Bantuan Pelanggan\n\n<=> • Telegram: [DhanRks](https://t.me/dhanRks)\n<=> • WhatsApp: [083873563833](https://api.whatsapp.com/send?phone=+6283873563833)\n<=> • Email: `Zonachangerbot@gmail.com`\n\nTetap berhati hati dalam setiap transaksi, karena penipu selalu ada dimana-mana!!",{on_result:"/otw", disable_web_page_preview:true})
