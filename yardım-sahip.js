const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


module.exports.run = async (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let embed = new Discord.RichEmbed()
.setDescription(`
**Botun Sunucudaki Prefixi: \`${prefix}\`**
\n✧ \`}eval\` ➤ Kod Denemek İçin Kullanılır.
✧ \`bakım\` ➤ Bakım Modunu Açmak İçin Kullanılır.
✧ \`karaliste\` ➤ Botu Kullanmayı Engeller.
✧ \`beyazliste\` ➤ Botu Erişime Açar.
✧ \`reboot\` ➤ Botu Yeniden Başlatır.
`)
.setColor("006DFF")    
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
.setAuthor(`${client.user.username} - Sahip Yardım Menüsü`, client.user.avatarURL)
message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["sahip"],
permLevel: 0
};
exports.help = {
  name: 'sahip-yardım'
}