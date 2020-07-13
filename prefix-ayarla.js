const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<a:dikkat:730464635873919039> │ Bu Komutu Kullanabilmek için **Sunucuyu Yönet** Yetkisine Sahip Olman Gerek`);
    let prefix = args.slice(0).join(' ');
    if (!prefix) message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> │ Hatalı Kullanım Örnek: \`${ayarlar.prefix}prefix -\` Şeklinde Kullanınız.`))
    if (prefix) message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription("<a:do:731500590945009694> │ Prefix Başarıyla "+prefix+" Şeklinde Ayarlandı"))
    db.set(`prefix_${message.guild.id}`, prefix)
    };
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };
    
    exports.help = {
      name: 'prefix-ayarla'
    };