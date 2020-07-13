const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Sunucu Sahibi** Olman Gerek`)
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix 
let kisi = message.mentions.users.first()
let member = message.guild.member(message.author.id)
let modlog = db.fetch(`modlog_${message.guild.id}`);
if (!kisi) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Kişiyi Etiketlemelisin Örnek: \`${prefix}kick @isim <sebep>\``))
db.set(`kicksayi_${kisi.id}`, 0)
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | ${kisi} Kişisinin Kick Limiti ${member} Tarafından Sıfırlandı`))        
client.channels.get(modlog).send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> | ${kisi} Kişisinin Kick Limiti ${member} Tarafından Sıfırlandı`))  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kicklimit-sıfırla", "kick-limit-sıfırla"],
  permLevel: 0
};
exports.help = {
  name: 'kicklimitsıfırla',
};