const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let banlimit = db.fetch(`banlimit_${message.guild.id}`)
let banrol = db.fetch(`banrol_${message.guild.id}`)
let modlog = db.fetch(`modlog_${message.guild.id}`)
let bansistemi = db.fetch(`bansistemi_${message.guild.id}`, {durum: "aktif"})

if (!banlimit) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Ban Limiti Ayarla Örnek: \`${prefix}ban-limit 1\``))
if (!banrol) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Ban Rol Ayarla Örnek: \`${prefix}ban-rol @rol\``))
if (!modlog) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Lütfen Mod Log Ayarla Örnek: \`${prefix}modlog-ayarla #kanal\``))
if (!bansistemi) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:dikkat:730464635873919039> | Ban Sistemini Aç Örnek: \`${prefix}ban-sistem aç\``))
if (!message.member.roles.has(banrol)) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **${banrol}** Rolüne Sahip Olman Gerek`))
if (message.member.roles.has(banrol)) {
let kisi = message.mentions.users.first()
let user = message.guild.member(kisi)
let member = message.guild.member(message.author.id)
let sebep = args.slice(1).join(' ')

if (!kisi) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> | Lütfen Banlamak İstediğin Kişiyi Etiketle"))
if (!sebep) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> | Lütfen Bir Sebep Gir"))
if (db.fetch(`bansayi_${message.author.id}`) >= banlimit) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:dikkat:730464635873919039> | Ban Limitin Doldu Sıfırlanana Kadar Daha Fazla Kişiyi Banlayamassın`))
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | ${user} Adlı Kişi ${member} Kişisi Tarafından Sunucudan Yasaklandı`))
message.guild.channels.get(modlog).send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | ${user} Adlı Kişi ${member} Kişisi Tarafından ${sebep} Sebebiyle Sunucudan Yasaklandı`))
message.guild.ban(kisi.id, sebep)
db.add(`bansayi_${message.author.id}`, 1)
db.add(`banlanansayi_${message.guild.id}`, 1)

}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla"],
  permLevel: 0
};
exports.help = {
  name: 'ban',
};