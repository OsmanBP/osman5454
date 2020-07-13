const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = (client, message, args) => { 
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let bug = args.slice(0).join(" ")
const küfür2 = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "anan", "karı",];
if (küfür2.some(word => bug.includes(word))) {
message.channel.send(new Discord.RichEmbed().setColor("006DFF").setDescription('<a:ya:731500590949203999> │ Bug Bildirirken Küfür Yazarsan Geçerisiz Sayılır')) 
return;
}
if(!bug) return message.channel.send(new Discord.RichEmbed().setColor("006DFF").setDescription(`<a:ya:731500590949203999> │ Bug Girmen Gerek Örnek: \`${prefix}bug-bilir Sil Komutu\``))
message.channel.send(new Discord.RichEmbed().setColor("006DFF").setDescription('<a:do:731500590945009694> │ İsteğiniz Başarıyla İletildi'))
let gond = new Discord.RichEmbed()
.setColor("006DFF")
.setThumbnail(message.author.avatarURL)
.setDescription(`
\n**Kullanıcı İsim** : \`${message.author.tag}\`
**Kullanıcı ID** : \`${message.author.id}\`
**Bug** : \n\`${bug}\`
`)
.setTimestamp()
.setFooter( message.author.tag , message.author.avatarURL )
.setAuthor(`${client.user.username} - Bug Bildir`, client.user.avatarURL,)
client.channels.get('730460933754978374').send(gond)

};
exports.conf = {
enabled: true,  
guildOnly: false, 
aliases: ["bugbildir"], 
permLevel: 0
};
exports.help = {
  name: 'bug-bildir',
};