/*CMD
  command: /validate_pemilik
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content);

Api.sendChatAction({
    chat_id: chat.chatid, action: 'typing'
});

if (json.status.code == "000") {

    var name = json.recipient_name;
    var rek = json.recipient_account;
    var code = json.recipient_bank;

    var email = User.getProperty("email_indodax");
    User.setProperty("nama_bank", code, "string");
    User.setProperty("no_rekening", rek, "string");
    User.setProperty("nama_pemilik", name, "string");

    let volume_user = Libs.ResourcesLib.userRes("volume");
    var saldo = Libs.ResourcesLib.userRes("saldo");
    rowIndex = User.getProperty("rowIndex");

    Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Informasi akun telah di perbaharui!!\n\n<=> ✦ Nama pemilik: `" + name + "`\n<=> ✦ No rekening: `" + code + "/" + rek + "`\n<=> ✦ Email: `" + email + "`", { on_result: "/otw" });


    let newRow = {
        'User ID': user.telegramid,
        'Username': "@" + user.username + "/" + user.first_name,
        'Email': email,
        'Bank/E-money': code.toUpperCase(),
        'Pemilik Rekening': name,
        'No Rekening': rek,
        'Volume Transaksi': volume_user.value().toFixed(0),
        'Saldo': saldo.value().toFixed(0)
    }

    let prms = {
        sheetName: "ValidateUser",
        row: newRow,
        onSuccess: "on_success",
        onError: "_9"
    }



    if (rowIndex) {
        prms.rowIndex = rowIndex;
        Libs.GoogleSpreadSheet.editRow(prms);
        return
    } else {

        Libs.GoogleSpreadSheet.addRow(prms)
        //Bot.runCommand("/edit_params")
        return
    }
}

Bot.sendKeyboard("👤 Akun, 🛒 Transaksi, 💎 Poin,\n👥 Affiliasi, ⚙ Ekstra, 🧮 Biaya,\n🛂 Support", "Mohon Maaf akun anda gagal di perbaharui, informasi Akun BANK anda tidak di temukan silahkan coba lagi beberapa menit kemudian!", { on_result: "/otw" })
return
