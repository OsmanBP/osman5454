const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


module.exports.run = async (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
let embed = new Discord.RichEmbed()
.setDescription(`
**Botun Sunucudaki Prefixi: \`${prefix}\`**
\n✧ \`bug-bildir\` ➤ Bottaki Bugları Bildirirsiniz.
✧ \`avatar\` ➤ Profil Resminizi Gösterir.
✧ \`istatistik\` ➤ Botun İstatistiklerini Gösterir.
✧ \`emojiler\` ➤ Sunucudaki Emojileri Gösterir.
✧ \`roller\` ➤ Sunucudaki Rolleri Gösterir.
✧ \`komutlar\` ➤ Bottaki Tüm Komutları Gösterir.
✧ \`kullanıcı-bilgi\` ➤ Sizin Hakkınızda Bilgi Verir.
✧ \`üye-durum\` ➤ Sunucunun Üye Durumu Gösterir.
✧ \`bot-kontrol\` ➤ Botun Aktifliğini Kontrol Eder.
✧ \`ayalar\` ➤ Sistem Ayarlarını Gösterir.
✧ \`afk\` ➤ AFK Moduna Geçersiniz.
✧ \`icon\` ➤ Sunucunun İconunu Gösterir.
✧ \`emoji-yaz\` ➤ Emoji Şeklinde Yazarsınız.
✧ \`rol-bilgi\` ➤ Rol Hakkında Bilgi Alırsınız.
✧ \`yetkilerim\` ➤ Sunucudaki Yetkilerinizi Gösterir.
`)
.setColor("006DFF")    
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
.setAuthor(`${client.user.username} - Kullanıcı Yardım Menüsü`, client.user.avatarURL)
message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["kullanıcı"],
permLevel: 0
};
exports.help = {
  name: 'kullanıcı-yardım'
}