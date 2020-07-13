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
    if (!x) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Hatalı Kullanım Örnek: \`${prefix}ban-sistemi aç/kapat/sıfırla\``))
    
    let osman = db.fetch(`bansistemi_${message.guild.id}`)
    if(işlem === "sıfırla") {
    if(!osman) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Ban Sistemi Zaten Sıfırlanmış`))
    message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Ban Sistemi Başarıyla Kapatıldı`)) 
    db.delete(`bansistemi_${message.guild.id}`)
    db.delete(`banlimit_${message.guild.id}`)
    db.delete(`banrol_${message.guild.id}`)
    
    }
    
    if(işlem === "aç") {
     if(osman) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Ban Sistemi Zaten Aktif`))
     message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Ban Sistemi Başarıyla Açıldı`)) 
     db.set(`bansistemi_${message.guild.id}`, {durum: "aktif"})
    
    }
    if(işlem === "kapat") {
      if(osman) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Ban Sistemi Zaten Kapalı`))
      message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Ban Sistemi Başarıyla Kapatıldı`)) 
      db.delete(`bansistemi_${message.guild.id}`, {durum: "aktif"})
     
     }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bansistemi", "ban-sistem"],
  permLevel: 0
};
exports.help = {
  name: 'ban-sistemi',
};