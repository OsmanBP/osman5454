const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

let modlog = db.fetch(`modlog_${message.guild.id}`)
if(!modlog) modlog = `<a:ya:731500590949203999> │ Kapalı`
else modlog = `<a:do:731500590945009694> │ <#${modlog}>`

let rolengel = db.fetch(`rolengel_${message.guild.id}`)
if(!rolengel) rolengel = `<a:ya:731500590949203999> │ Kapalı`
else rolengel = `<a:do:731500590945009694> │ Açık`

let botengel = db.fetch(`botkoruma_${message.guild.id}`)
if(!botengel) botengel = `<a:ya:731500590949203999> │ Kapalı`
else botengel = `<a:do:731500590945009694> │ Açık`

let kanalengel = db.fetch(`kanalengel_${message.guild.id}`)
if(!kanalengel) kanalengel = `<a:ya:731500590949203999> │ Kapalı`
else kanalengel = `<a:do:731500590945009694> │ Açık`

let bansistemi = db.fetch(`bansistemi_${message.guild.id}`, {durum: "aktif"})
if(!bansistemi) bansistemi = `<a:ya:731500590949203999> │ Kapalı`
else bansistemi = `<a:do:731500590945009694> │ Açık`

let kicksistemi = db.fetch(`kicksistemi_${message.guild.id}`, {durum: "aktif"})
if(!kicksistemi) kicksistemi = `<a:ya:731500590949203999> │ Kapalı`
else kicksistemi = `<a:do:731500590945009694> │ Açık`
    
let küfürsistemi = db.fetch(`kufur_${message.guild.id}`)
if(!küfürsistemi) küfürsistemi = `<a:ya:731500590949203999> │ Kapalı`
else küfürsistemi = `<a:do:731500590945009694> │ Açık`

let reklamsistemi = db.fetch(`reklam_${message.guild.id}`)
if(!reklamsistemi) reklamsistemi = `<a:ya:731500590949203999> │ Kapalı`
else reklamsistemi = `<a:do:731500590945009694> │ Açık`

let yöneticisistemi = db.fetch(`ceyöneticiengel_${message.guild.id}`)  
if(!yöneticisistemi) yöneticisistemi = `<a:ya:731500590949203999> │ Kapalı`
else yöneticisistemi = `<a:do:731500590945009694> │ Açık`

message.channel.send(new Discord.RichEmbed()
.setColor("DC47D6")
.setAuthor(`${client.user.username} - Sistem Ayar Paneli`, client.user.avatarURL)
.addField(`✧ **Log Kanalı:**`, `${modlog}`, true)
.addField(`✧ **Ban Sistemi:**`, `${bansistemi}`, true)
.addField(`✧ **Kick Sistemi:**`, `${kicksistemi}`, true)
.addField(`✧ **Küfür Engel:**`, `${küfürsistemi}`, true)
.addField(`✧ **Reklam Engel:**`, `${reklamsistemi}`, true)
.addField(`✧ **Yönetici Engel:**`, `${yöneticisistemi}`, true)
.addField(`✧ **Rol Engel:**`, `${rolengel}`, true)
.addField(`✧ **Kanal Engel:**`, `${kanalengel}`, true)
.addField(`✧ **Bot Engel:**`, `${botengel}`, true)
.setFooter(message.author.tag, message.author.avatarURL).setTimestamp())

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: `ayarlar`,
};