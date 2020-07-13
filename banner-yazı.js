const Discord = require('discord.js');

exports.run = (client, message, args) => {

let yazı = args.join('+');
if(!args[0]) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> │ Yazı Yazman Gerek"))
let embed = new Discord.RichEmbed()
.setColor("006DFF")
.setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + yazı)
message.channel.send(embed);

}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banner-yazı", "banneryaz", "banner-yaz"],
  permLevel: 0
};
module.exports.help = {
  name: 'banneryazı'
};