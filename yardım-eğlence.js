const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


module.exports.run = async (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let embed = new Discord.RichEmbed()
.setDescription(`
**Botun Sunucudaki Prefixi: \`${prefix}\`**
\n✧ \`banner-yazı\` ➤ İstediğinizi Banner Olarak Yazar.
✧ \`ata-sözü\` ➤ Atatürkün Sözünden 1 Tanesini Söyler.
✧ \`boks\` ➤ Boks Makinesine Vurursun.
✧ \`bota-yazdır\` ➤ Bota İstediğini Yazdırırsın.
✧ \`fal\` ➤ Bot Falınıza Bakar.
✧ \`hava\` ➤ Hava Durumunu Gösterir.
✧ \`mcskin\` ➤ Minecraft Skini Gösterir.
✧ \`sevgi\` ➤ Aşkınızın Boyutunu Ölçer.
`)
.setColor("006DFF")    
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
.setAuthor(`${client.user.username} - Eğlence Yardım Menüsü`, client.user.avatarURL)
message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["eğlence"],
permLevel: 0
};
exports.help = {
  name: 'eğlence-yardım'
}