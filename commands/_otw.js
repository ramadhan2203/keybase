/*CMD
  command: /otw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can view all result via:
// Bot.inspect(options);

let message_for_editing = options.result.message_id;
User.setProperty("msgid", message_for_editing, "integer")
