const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {
  
if(message.author.id !== ayarlar.sahip) return message.channel.send(`<a:dikkat:730464635873919039> │ Bu Komutu Kullanabilmek için **Botun Sahibi** Olman Gerek`)
let cuser = message.mentions.users.first() || cclient.users.get(args[0])
if(!cuser) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> │ Hatalı Kullanım Lütfen Bir Kullanıcı Yaz"))

message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> │ **${cuser.tag}** Kullanıcısı Karalisteden Çıkarıldı`))
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };