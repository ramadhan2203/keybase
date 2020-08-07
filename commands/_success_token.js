/*CMD
  command: /success_token
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(data.content);
var result = json.access_token;
Bot.setProperty("access_token", result,"string")
return

