const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
if(message.author.id !== ayarlar.sahip) return message.channel.send("<a:dikkat:730464635873919039> │ Bu Komutu Kullanabilmek için **Botun Sahibi** Olman Gerek")
let argüman = args
if(argüman[0] !== "al" && argüman[0] !== "çık") return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> │ Hatalı Kullanım Örnek: \`${prefix}bakım aç/kapat\``))
let cveri = db.fetch(`cbakım`)

if(argüman[0] === "al") {
if(cveri) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:dikkat:730464635873919039> │ Bot Zaten Bakım Moduna Alınmış"))
let sebep = argüman.slice(1).join(' ')
if(!sebep) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> │ Bir Sebep Gir"))

message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription('<a:do:731500590945009694> │ Bot **'+sebep+'** Sebebinden Dolayı Başarıyla Bakım Moduna Alındı'))
db.set(`cbakım`, sebep)
return  
}

if(argüman[0] === "çık") {
if(!cveri) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> │ Bot Zaten Bakım Modunda Değil"))

message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription("<a:do:731500590945009694> │ Bot Başarıyla Bakım Modundan Çıkarıldı"))
db.delete(`cbakım`)
return  

}}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'bakım'
};