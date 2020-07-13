const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
    if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix 
let rol = message.mentions.roles.first()
if (!rol) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Bir Rol Etiketlemelisin Örnek: \`${prefix}kick-rol @rol\``)) 
if (rol) message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | Kick Rolü: ${rol} Olarak Ayarlandı`))  
db.set(`kickrol_${message.guild.id}`, rol.id)

};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["kick-rol"],
permLevel: 0
}; 
exports.help = {
name: 'kickrol'
};