/*CMD
  command: /get_token
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="1"){

var json = JSON.parse(data.content)
var result = json.access_token
//Bot.sendMessage(inspect(result)

Bot.setProperty("access_token", result,"string")

//Bot.runCommand("/buy_voucher")
return
}

Api.sendChatAction({
chat_id:chat.chatid, action:"typing"})

HTTP.post({
url:"https://btcapi.net/mobileApiV1/token",
headers:{
        "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent":"androidclient"
        },
body:"refresh_token=0b749c833f97e4c7958cfa74bdb63fe6f6dc8b38&device_info=SM-J530Y%252C%2BAndroid%2B9%2B%2528API%2B28%2529%2B&device_id=0a7fa26c5d3e737e7b5642addc21bfb3c13e54251d5806cf729438df7f0ca16f&grant_type=refresh_token&refresh_pin=220396&fcm_token=&client_secret=&gps=&lang=indonesia&client_id=androidclient&",
success:"/get_token 1"
})
