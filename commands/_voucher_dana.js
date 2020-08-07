/*CMD
  command: /voucher_dana
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var voucher = User.getProperty("voucher_dana")

let access_token = Bot.getProperty("access_token")

Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

let url ="https://btcapi.net/mobileApiV1/req/redeem_voucher"

HTTP.post({
url:url,
headers:{
"content-type" : "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent":"androidclient",
},
body:
"access_token="+access_token+"&device_info=SM-J530Y%252C%2BAndroid%2B9%2B%2528API%2B28%2529%2B&device_id=bfe6420b12ca96d7a817ac9d2f1e1e8e650a76fbc6c059cea80a20d8a2b5fa9e&voucher="+voucher+"&lang=indonesia&",
success:"/on_claim_dana",
error :"/error"

})
