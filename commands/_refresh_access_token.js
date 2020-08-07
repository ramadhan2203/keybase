/*CMD
  command: /refresh_access_token
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid, action:"typing"})

HTTP.post({
url:"https://btcapi.net/mobileApiV1/token",
headers:{
        "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent":"androidclient"
        },
body:"refresh_token=434a3442a99bb99175955eda5e748e9d9c6983c4&device_info=SM-J530Y%252C%2BAndroid%2B9%2B%2528API%2B28%2529%2B&device_id=bfe6420b12ca96d7a817ac9d2f1e1e8e650a76fbc6c059cea80a20d8a2b5fa9e&grant_type=refresh_token&refresh_pin=220396&fcm_token=&client_secret=&gps=&lang=indonesia&client_id=androidclient&",
success:"/success_token"
//background: true
})
