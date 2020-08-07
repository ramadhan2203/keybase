/*CMD
  command: /edit_params
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="0"){
      let rowIndex = options.rowIndex;
          
      User.setProperty("rowIndex", rowIndex, "integer");
return
}
let volume_user = Libs.ResourcesLib.userRes("volume")
var saldo = Libs.ResourcesLib.userRes("saldo")

let newRow ={ 
    'User ID': user.telegramid,
    'Username':"@"+user.username,
    'Saldo': saldo.value().toFixed(0),
    'Volume Transaksi': volume_user.value().toFixed(0)
}

let prms = {
  sheetName: "ValidateUser",
  row: newRow,
  onSuccess: "/edit_params 0",
  onError: "/edit_error"
}

rowIndex = User.getProperty("rowIndex");

if(rowIndex){
  prms.rowIndex = rowIndex;
  Libs.GoogleSpreadSheet.editRow(prms);
  return
}


