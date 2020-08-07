/*CMD
  command: /in
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
  let telegramid = arr[0];

let tgID = telegramid
badUsers = Bot.getProperty("badUsers", { list: {} });
badUsers.list[tgID] = true;

// for unban:
// badUsers.list[tgID] = false;

Bot.setProperty("badUsers", badUsers, "json");
Bot.sendMessage(inspect(badUsers))
Bot.sendMessage("User with TG id: " + tgID + " banned");
}
