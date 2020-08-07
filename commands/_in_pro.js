/*CMD
  command: /in_pro
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="2"){
var json = JSON.parse(data.content)
Bot.sendMessage(inspect(json))

return
}

Api.sendChatAction({chat_id:chat.chatid,action:"typing"})


HTTP.post({
url: "https://zonakuota.com/api/v2/get",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&auth_username=AZIZARCELL&requests%5Bvouchers_by_id%5D%5Bid%5D=%2C573%2C1700%2C574%2C575%2C576%2C1699%2C577%2C578%2C579%2C1698&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02"
,
success:"/in_pro 2"

})



