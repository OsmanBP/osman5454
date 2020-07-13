const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id === ayarlar.sahip) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let modlog = db.fetch(`modlog_${message.guild.id}`)
let arguman = args[0];
if (!modlog)return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Mod Log Ayarlanmamış Örnek: \`${prefix}modlog-ayarla #kanal\``))
if (!arguman) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Hatalı Kullanım Örnek: \`${prefix}bot-engel aç/kapat\``))
if (arguman === "aç") {
if (db.has(`botkoruma_${message.guild.id}`) === true) {
    message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Sistem Zaten Açık`))
}
if (db.has(`botkoruma_${message.guild.id}`) === false) {
db.set(`botkoruma_${message.guild.id}`, "Aktif")

message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription("<a:do:731500590945009694> │ Bot Engel Başarıyla Açıldı"))
}}

if (arguman === "kapat") {
if (db.has(`botkoruma_${message.guild.id}`) === true) {
db.delete(`botkoruma_${message.guild.id}`)
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription("<a:do:731500590945009694> │ Bot Engel Başarıyla Kapatıldı"))
}
if (db.has(`botkoruma_${message.guild.id}`) === false) {
    message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Sistem Zaten Kapalı`))

}}}
exports.conf = {
guildOnly : true,
enabled : true,
aliases : ["botengel"],
permLevel : 0
}
exports.help = {
name : "bot-engel"
}