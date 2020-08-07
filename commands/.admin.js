/*CMD
  command: .admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var panel = {
  // Panel title
  title: "Admin Information",
  description: "524550302",
  // order index
  index: 0,
  icon: "key",
  // save button title - default "SAVE"
  button_title: "SAVE",
  // command called on saving
  // not necessary
  /* on_saving:{
     command: "/on-saving",
     // if you need user
     user_id: user_id // Get it via Bot.sendMessage(user.id)
  },
  */
  
  // Fields for this Panel
  // here 1 field only
  fields: [
    {
      name: "ADMIN_ID",
      title: "Admin ID",
      description: "524550302",
      type: "string",
      placeholder: "524550302",
      // value: 100
    }
    // another fields here
    // if needed
    // ...
  ]
}

AdminPanel.setPanel({
  panel_name: "AdminInfo",
  data: panel
  // force: true // default false - save fields values
});
