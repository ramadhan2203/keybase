/*CMD
  command: /pulsa
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){

  let arr = params.split(" ");
  let id = arr[0];
var m = User.getProperty("msgid")
Api.deleteMessage({
chat_id:chat.chatid, message_id:m})

Api.sendChatAction({
chat_id:chat.chatid, action:'typing'})

var nomer = User.getProperty("nomer")

HTTP.post({
url: "https://zonakuota.com/api/v2/get",
headers:{
"content-type":" application/x-www-form-urlencoded","user-agent":"okhttp/4.0.0-RC1"
},
body:
"requests%5Bproduct_details%5D%5Bid%5D="+id+"&app_reg_id=fENmx1sVF3g%3AAPA91bEW-ibYJk3a_OOfMUyRYIghgxnd6BhGRjntFkCd2QuFms1-KBxg_VIdOQ5F3iCoazkq0w95x5iPghgvVwYTperBBFjjfs1zr3DHjUmWvHkhHezd5-ABZETlEGGKKyO530xXNuUp&app_version_code=190902&auth_username=AZIZARCELL&auth_token=10208%3APVuT1nimKfj7eQFUkE09xZBJ6ytlz4oY&app_version_name=19.09.02"
,
success:"/otw_pulsa"

})


}
