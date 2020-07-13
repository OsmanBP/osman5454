const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (client, message, args) => {
const seksizaman = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")

return message.channel.send(new Discord.RichEmbed()
.setColor("006DFF")
.setThumbnail(message.author.avatarURL)
.setDescription(`
\n<:nitro:730465122119712798> │ **Bot Sahibi Bilgileri:**
✧ İsim ➤ <@${ayarlar.sahip}>
✧ ID ➤ \`${ayarlar.sahip}\`
\n<:nitro:730465122119712798> │ **Sunucu Bilgileri:**
✧ Kullanıcılar ➤ \`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
✧ Sunucular ➤ \`${client.guilds.size.toLocaleString()}\`
✧ Kanallar ➤ \`${client.channels.size.toLocaleString()}\`
\n<:nitro:730465122119712798> │ **Bot Sürüm Bilgileri:**
✧ Discord.JS ➤ \`v${Discord.version}\`
✧ Node.JS ➤ \`${process.version}\`
\n<:nitro:730465122119712798> │ **Bot Bilgileri:**
✧ Ping ➤ \`${client.ping.toLocaleString()} MS\`
✧ Çalışma Süresi ➤ \`${seksizaman}\`
✧ Komut Sayısı ➤ \`${client.commands.size}\`
\n<:nitro:730465122119712798> │ **Sistem Bilgileri:**
✧ Bellek Kullanımı ➤ \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\` 
✧ Bit ➤ \`${os.arch()}\`
✧ İşletim Sistemi ➤ \`${os.platform()}\`
✧ CPU ➤ \`${os.cpus().map(i => `${i.model}`)[0]}\`
`)
.setTimestamp()
.setFooter( message.author.tag , message.author.avatarURL )
.setAuthor(`${client.user.username} - Bot İstatistikleri `, client.user.avatarURL))
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [ 'i'],
permLevel: 0
};
exports.help = {
name: "istatistik"
};