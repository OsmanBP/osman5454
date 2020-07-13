const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args, yasin) => { 

let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek>`)
let codeming = args[0]
if(!codeming) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Hatalı Kullanım Örnek: \`${prefix}yönetici-engel aç\` Veya \`${prefix}yönetici-engel kapat\``))
let veri = await db.fetch(`ceyöneticiengel_${message.guild.id}`)
if(args[0] === "aç") {
if(veri) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription('<a:ya:731500590949203999> | Sistem Zaten Açık Durumda')) 
db.set(`ceyöneticiengel_${message.guild.id}`, 'yes')    
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription('<a:do:731500590945009694> | Sistem Başarıyla Açıldı'))  
return 
}  
if(args[0] === "kapat") {
if(!veri) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> | Sistem Zaten Kapalı Durumda")) 
db.delete(`ceyöneticiengel_${message.guild.id}`)  
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription('<a:do:731500590945009694> | Sistem Başarıyla Kapatıldı'))
return
}  
message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Hatalı Kullanım Örnek: \`${prefix}yönetici-engel aç\` Veya \`${prefix}yönetici-engel kapat\``))
};
exports.conf = {
enabled: true,  
guildOnly: false, 
aliases: ["yonetici-engel"], 
permLevel: 0
};
exports.help = {
name: 'yönetici-engel'
};