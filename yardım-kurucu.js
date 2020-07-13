const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


module.exports.run = async (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let embed = new Discord.RichEmbed()
.setDescription(`
**Botun Sunucudaki Prefixi: \`${prefix}\`**
\n✧ \`prefix-ayarla\` ➤ Botun Prefixini Ayarlarsınız.
✧ \`prefix-sıfırla\` ➤ Prefixi Sıfırlarsınız.
✧ \`ban-limit\` ➤ Yetkililerin Banlayabilcek Kişi Sayısını Ayarlarsınız.
✧ \`ban-limit-sıfırla\` ➤ Yetkililerin Banlayabilcek Kişi Sayısını Sıfırlarsınız.
✧ \`ban-sistemi aç\` ➤ Ban Sistemini Erişime Açarsınız.
✧ \`ban-sistemi kapat\` ➤ Ban Sistemini Erişime Kapatırsınız.
✧ \`ban-sistemi sıfırla\` ➤ Ban Sistemini Sıfırlarsınız.
✧ \`kick-limit\` ➤ Yetkililerin Kickleyebilcek Kişi Sayısını Ayarlarsınız.
✧ \`kick-limit-sıfırla\` ➤ Yetkililerin Kickleyebilcek Kişi Sayısını Sıfırlarsınız.
✧ \`kick-sistemi aç\` ➤ Kick Sistemini Erişime Açarsınız.
✧ \`kick-sistemi kapat\` ➤ Kick Sistemini Erişime Kapatırsınız.
✧ \`kick-sistemi sıfırla\` ➤ Kick Sistemini Sıfırlarsınız.
✧ \`küfür-engel\` ➤ Küfür Filtresini Açarsınız.
✧ \`reklam-engel\` ➤ Reklam Filtresini Açarsınız.
✧ \`yönetici-engel\` ➤ Sunucu Sahibi Dışında Yönetici Vermeyi Engeller.
✧ \`rol-engel\` ➤ Rol Oluşturup Silmeyi Engeller.
✧ \`kanal-engel\` ➤ Kanal Oluşturup Silmeyi Engeller.
✧ \`bot-engel\` ➤ Sunucuya Bot Girişini Kapatırsınız.
✧ \`modlog-ayarla\` ➤ Sunucuda Olan Olayları Takip Ettiğiniz Kanalı Ayarlarsınız.
✧ \`modlog-sıfırla\` ➤ Ayarlı Olan Mod Log Kanalını Sıfırlarsınız.
`)
.setColor("006DFF")    
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
.setAuthor(`${client.user.username} - Kurucu Yardım Menüsü`, client.user.avatarURL)
message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["kurucu"],
permLevel: 0
};
exports.help = {
  name: 'kurucu-yardım'
}