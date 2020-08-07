/*CMD
  command: Axis data
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage("`Loading data...`")

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Api.sendChatAction({chat_id:chat.chatid,action:"typing"})


HTTP.post({
url: "https://zonakuota.com/api/v2/get",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&auth_username=AZIZARCELL&requests%5Bvouchers_by_id%5D%5Bid%5D=%2C1134%2C1135%2C1136%2C1137%2C1138%2C2160%2C2161%2C2440%2C2441&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02"
,
success:"Axis_data"
//background: true

})

