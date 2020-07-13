const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")

 exports.run = (client, message, args) => {

let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Mesajları Yönet** Yetkisine Sahip Olman Gerek`)
let question = args.join(' ')
let user = message.author.username
if (!question) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Yazı Yazman Gerek Örnek: \`${prefix}oylama Naber\``))

message.channel.send(
new Discord.RichEmbed()
.setColor("006DFF")
.setThumbnail(message.author.avatarURL)
.setAuthor(`${client.user.username} - Oylama Sistemi`, client.user.avatarURL,)
.addField(`**Oylama Mesajı:**`, `${question}`)).then(function(message) {
message.react('✅');
message.react('❌');
});};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['oylamayap'],
permLevel: 0
};

exports.help = {
name: 'oylama'
};