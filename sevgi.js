const Discord = require("discord.js")
exports.run = async (client, msg, args) => {

    let ask=[
      "Aşkın seni %3 Seviyor",
      "Aşkın seni %6 Seviyor",
      "Aşkın seni %9 Seviyor",
      "Aşkın seni %12 Seviyor",
      "Aşkın seni %18 Seviyor",
      "Aşkın seni %20 Seviyor",
      "Aşkın seni %23 Seviyor",
      "Aşkın seni %26 Seviyor",
      "Aşkın seni %29 Seviyor",
      "Aşkın seni %30 Seviyor",
      "Aşkın seni %30 Seviyor",
      "Aşkın seni %50 Seviyor",
      "Aşkın seni %60 Seviyor",
      "Aşkın seni %70 Seviyor",
      "Aşkın seni %73 Seviyor",
      "Aşkın seni %76 Seviyor",
      "Aşkın seni %79 Seviyor",
      "Aşkın seni %82 Seviyor",
      "Aşkın seni %85 Seviyor",
      "Aşkın seni %88 Seviyor",
      "Aşkın seni %90 Seviyor",
      "Aşkın seni %91 Seviyor",
      "Aşkın seni %92 Seviyor",
      "Aşkın seni %93 Seviyor",
      "Aşkın seni %94 Seviyor",
      "Aşkın seni %95 Seviyor",
      "Aşkın seni %96 Seviyor",
      "Aşkın seni %97 Seviyor",
      "Aşkın seni %98 Seviyor",
      "Aşkın seni %99 Seviyor",
      "Aşkın seni %100 Seviyor",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send("<a:ya:731500590949203999> | Sevdiğin Kişiyi Eitketle");
  
  
  
    else{
    msg.channel.send(new Discord.RichEmbed().setColor("006DFF").setDescription(`${member} ${ask[Math.floor(Math.random() * 30)]}`))
    }
  
  
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sevgi"],
    permLevel: 0
   };
  
  exports.help = {
    name: 'sevgi',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'sevgi'
   }