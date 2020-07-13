const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let kanal = message.mentions.channels.first() 
if (!kanal) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Kanal Ekle Örnek: \`${prefix}modlog-ayarla #kanal\``))
if (kanal) message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Mod Log Kanalı Başarıyla **${kanal}** Olarak Ayarlandı`))
db.set(`modlog_${message.guild.id}`, kanal.id)

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["modlogayarla"],
  permLevel: 0
};
exports.help = {
  name: `modlog-ayarla`,
};