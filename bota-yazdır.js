const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = (client, message, args) => {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Hatalı Kullanım Örnek: \`${prefix}yaz Naber\``))
message.channel.send(mesaj);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'yaz'
};
