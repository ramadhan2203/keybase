/*CMD
  command: /validate_email
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Kembali"){
    Bot.runCommand("/start")
}else{
function validateEmail(email) {
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(String(email).toLowerCase());
}

if(validateEmail(message)){
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})


let m = User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid, message_id:m})

Bot.sendMessage("List kode bank lihat [disini](https://telegra.ph/KODE-BANK-INDONESIA-06-28)\nContoh `002`, `ovo`,`dana`, `gopay`\nSilahkan masukan kode Bank/E-Money 🔻",{on_result:"/otw",disable_web_page_preview:true});

User.setProperty("email_indodax", data.message,"string")

Bot.runCommand("/validate_bank")
}else{
Api.sendChatAction({chat_id:chat.chatid, action:"typing"})


let m = User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid, message_id:m})

Bot.sendMessage("Email yang anda masukan salah, silahkan cek kembali dan pastikan email yang anda masukan sama dengan email akun indodax anda 🔻",{on_result:"/otw"});

Bot.runCommand("/validate_email")
}
}

