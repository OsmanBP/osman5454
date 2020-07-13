const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
let modlog = db.fetch(`modlog_${message.guild.id}`)
if (!modlog) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Mod Log Kanalı Zaten Sıfırlanmış`))
db.delete(`modlog_${message.guild.id}`)
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Mod Log Kanalı Sıfırlandı`))

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["modlogsıfırla"],
  permLevel: 0
};
exports.help = {
  name: `modlog-sıfırla`,
};