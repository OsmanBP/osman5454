const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let modlog = db.fetch(`modlog_${message.guild.id}`)
if (!modlog)return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Mod Log Ayarlanmamış Örnek: \`${prefix}modlog-ayarla #kanal\``))
if (!args[0]){
message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Hatalı Kullanım Örnek: \`${prefix}rol-engel aç/kapat\``))
}
if (args[0] === 'aç'){
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Rol Engel Başarıyla Açıldı`))
db.set(`rolengel_${message.guild.id}`, "acik")
}
if (args[0] === 'kapat'){
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Rol Engel Başarıyla Kapatıldı`))
db.set(`rolengel_${message.guild.id}`, "kapali")
db.delete(`rolengel_${message.guild.id}`)

}}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolengel"],
  permLevel: 0
}
exports.help = {
  name: "rol-engel"
}
