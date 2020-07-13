const Discord = require("discord.js")


exports.run = (client,message) => {

   let osman = new Discord.RichEmbed()
   .setColor("006DFF")
   .setImage(message.guild.iconURL) 
   message.channel.send(osman)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'icon'
};
