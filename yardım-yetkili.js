const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


module.exports.run = async (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let embed = new Discord.RichEmbed()
.setDescription(`
**Botun Sunucudaki Prefixi: \`${prefix}\`**
\n✧ \`ban\` ➤ Kullanıcı Yasaklamakya Yarar.
✧ \`kick\` ➤ Kullanıcı Uzaklaştırmaya Yarar.
✧ \`sil\` ➤ Mesaj Silmeye Yarar.
✧ \`Oylama\` ➤ Bir Oylama Başlatırsınız.
`)
.setColor("006DFF")    
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
.setAuthor(`${client.user.username} - Yetkili Yardım Menüsü`, client.user.avatarURL)
message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["yetkili"],
permLevel: 0
};
exports.help = {
  name: 'yetkili-yardım'
}