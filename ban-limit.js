const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
    if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let limit = args[0]
if (!limit) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Limiti Yaz Örnek: \`${prefix}ban-limit 1\``))
if (isNaN(limit)) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Limit Sadece Sayılardan Oluşarbilir`))
if (limit) message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Ban Limit Sayısı: \`${limit}\` Olarak Ayarlandı`))
db.set(`banlimit_${message.guild.id}`, limit)

}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['ban-limit'],
permLevel: 0
};   
exports.help = {
name: 'banlimit',
};