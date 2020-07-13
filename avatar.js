const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
let user;
if (message.mentions.users.first()) {
user = message.mentions.users.first();
} else {
user = message.author;
}
const avatar = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage(user.avatarURL)
message.channel.sendEmbed(avatar)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: 0
};
exports.help = {
  name: 'avatar',
};