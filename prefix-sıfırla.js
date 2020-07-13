const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<a:dikkat:730464635873919039> │ Bu Komutu Kullanabilmek için **Sunucuyu Yönet** Yetkisine Sahip Olman Gerek`);
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if (prefix) message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription("<a:do:731500590945009694> │ Prefix Başarıyla Şekilde Sıfırlandı"))
    db.delete(`prefix_${message.guild.id}`, prefix)
    };
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };
    
    exports.help = {
      name: 'prefix-sıfırla'
    };