const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let embed = new Discord.RichEmbed()
.setDescription(`
\n<:nitro:730465122119712798> Eğlence Komutları Detaylı Bilgi İçin: \`${prefix}eğlence\` Bu Komutları **Herkes** Kullanabilir.
\`banner-yazı\` - \`ata-sözü\` - \`boks\` - \`bota-yazdır\` - \`fal\` - \`hava\` - \`mcskin\` - \`sevgi\` - \`emoji-yaz\`
\n<:nitro:730465122119712798> Kullanıcı Komutları Detaylı Bilgi İçin: \`${prefix}Kullanıcı\` Bu Komutları **Herkes** Kullanabilir.
\`bug-bildir\` - \`emojiler\` - \`istatistik\` - \`komutlar\` - \`kullanıcı-bilgi\` - \`roller\` - \`üye-durum\` - \`bot-kontrol\` - \`ayarlar\` - \`afk\` - \`icon\` - \`avatar\` - \`rol-bilgi\` - \`yetkilerim\`
\n<:nitro:730465122119712798> Yetkili Komutları Detaylı Bilgi İçin: \`${prefix}yetkili\` Bu Komutları **Sunucudaki Yetkililer** Kullanabilir.
\`ban\` - \`kick\` - \`sil\` - \`oylama\`
\n<:nitro:730465122119712798> Sunucu Sahibi Komutları Detaylı Bilgi İçin: \`${prefix}kurucu\` Bu Komutları **Sunucu Sahibi** Kullanabilir.
\`prefix-ayarla\` - \`prefix-sıfırla\` - \`ban-limit\` - \`ban-limit-sıfırla\` - \`ban-rol\` - \`ban-sistemi aç\` - \`ban-sistemi kapat\` - \`ban-sistemi sıfırla\` - \`kick-limit\` - \`kick-limit-sıfırla\` - \`kick-rol\` - \`kick-sistemi aç\` - \`kick-sistemi kapat\` - \`kick-sistemi sıfırla\` - \`küfür-engel\` - \`reklam-engel\` - \`yönetici-engel\` - \`rol-engel\` - \`kanal-engel\` - \`modlog-ayarla\` - \`modlog-sıfırla\` - \`bot-engel\`
\n<:nitro:730465122119712798> Bot Sahibi Komutları Detaylı Bilgi İçin: \`${prefix}sahip\` Bu Komutları **Bot Sahibi** Kullanabilir.
\`bakım\` - \`beyazliste\` - \`karaliste\` - \`eval\` - \`reboot\`
`)
.setColor("006DFF")    
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setFooter(message.author.tag, message.author.avatarURL)
.setAuthor(`${client.user.username} - Yardım Menüsü`, client.user.avatarURL)
message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["y"],
permLevel: 0
};
exports.help = {
  name: 'yardım'
}