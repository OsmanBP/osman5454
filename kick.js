const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix   
let kicklimit = db.fetch(`kicklimit_${message.guild.id}`)
let kickrol = db.fetch(`kickrol_${message.guild.id}`)
let modlog = db.fetch(`modlog_${message.guild.id}`)
let kicksistemi = db.fetch(`kicksistemi_${message.guild.id}`, {durum: "aktif"})

if (!kicklimit) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Kick Limiti Ayarla Örnek: \`${prefix}kick-limit 1\``))
if (!kickrol) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Kick Rol Ayarla Örnek: \`${prefix}kick-rol @rol\``))
if (!modlog) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Mod Log Ayarla Örnek: \`${prefix}modlog-ayarla #kanal\``))
if (!kicksistemi) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:dikkat:730464635873919039> | Ban Sistemini Aç Örnek: \`${prefix}kick-sistem aç\``))
if (!message.member.roles.has(kickrol)) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **${kickrol}** Rolüne Sahip Olman Gerek`))
if (message.member.roles.has(kickrol)) {

let kisi = message.mentions.users.first()
let user = message.guild.member(kisi)
let member = message.guild.member(message.author.id)
let sebep = args.slice(1).join(' ')

if (!kisi) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> | Lütfen Kicklemek İstediğin Kişiyi Etiketle"))
if (!sebep) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> | Lütfen Bir Sebep Gir"))
if (db.fetch(`kicksayi_${message.author.id}`) >= kicklimit) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:dikkat:730464635873919039> | Kick Limitin Doldu Sıfırlanana Kadar Daha Fazla Kişiyi Kickleyemessin`))
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | ${user} Adlı Kişi ${member} Kişisi Tarafından Sunucudan Yasaklandı`))
message.guild.channels.get(modlog).send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | ${user} Adlı Kişi ${member} Kişisi Tarafından ${sebep} Sebebiyle Sunucudan Yasaklandı`))
message.guild.kick(kisi.id, sebep)
db.add(`kicksayi_${message.author.id}`, 1)
db.add(`kicklenensayi_${message.guild.id}`, 1)

}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kick',
};