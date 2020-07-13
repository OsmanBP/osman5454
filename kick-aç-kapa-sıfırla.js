const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix   
    if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
    let işlem = args[0]
    let x;
    if(işlem === "sıfırla") x = "."
    if(işlem === "aç") x = "."
    if(işlem === "kapat") x = "."
    if (!x) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Hatalı Kullanım Örnek: \`${prefix}kick-sistemi aç/kapat/sıfırla\``))
    
    if(işlem === "sıfırla") {
    let osman1 = db.fetch(`kicksistemi_${message.guild.id}`)
    if(!osman1) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Kick Sistemi Zaten Sıfırlanmış`))
    message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Kick Sistemi Başarıyla Kapatıldı`)) 
    db.delete(`kicksistemi_${message.guild.id}`)
    db.delete(`kicklimit_${message.guild.id}`)
    db.delete(`kickrol_${message.guild.id}`)
    
    }
    if(işlem === "aç") {
     let osman2 = db.fetch(`kicksistemi_${message.guild.id}`)
     if(osman2) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Kick Sistemi Zaten Aktif`))
     message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Kick Sistemi Başarıyla Açıldı`)) 
     db.set(`kicksistemi_${message.guild.id}`, {durum: "aktif"})
    
    }
    if(işlem === "kapat") {
      let osman3 = db.fetch(`kicksistemi_${message.guild.id}`)
      if(osman3) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Kick Sistemi Zaten Kapalı`))
      message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Kick Sistemi Başarıyla Kapatıldı`)) 
      db.delete(`kicksistemi_${message.guild.id}`, {durum: "aktif"})
     }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kicksistemi", "kick-sistem"],
  permLevel: 0
};
exports.help = {
  name: 'kick-sistemi'
};