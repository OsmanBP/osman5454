const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmek için **Mesajları Yönet** Yetkisine Sahip Olman Gerek`);
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('<a:dikkat:730464635873919039> | Bu Komutu Kullanabilmem İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek')
    let silici = args[0]

    if (!silici) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Sayı Girmen Gerek`))
    if(isNaN(silici)) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Sayı Girmen Gerek`))
if (silici > 99) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> | En Fazla 99 Tane Silebilirsin."))
message.channel.bulkDelete(silici);
message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:do:731500590945009694> | Mesajlar Başarıyla Silindi"))
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 0
};

module.exports.help = {
  name: "sil"
}; 