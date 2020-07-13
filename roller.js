const Discord = require('discord.js')
exports.run = (client, message, args) => {
try {
const embed = new Discord.RichEmbed()
.setColor("006DFF")
.setAuthor(`${client.user.username} - Sunucudaki Roller`, client.user.avatarURL,)
.setDescription(`
\n<:nitro:730465122119712798> │ **Sunucudaki Roller \`${message.guild.roles.size}\` Tane:**
\n${message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' ')}
`)
.setTimestamp()
.setThumbnail(message.author.avatarURL)
.setFooter( message.author.tag , message.author.avatarURL )
message.channel.send({embed})
} catch (err) {
message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> │ Sunucuda Çok Fazla Rol Olduğu İçin Gösterilemiyor"))
}}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roller'],
	permLevel: 0
}
exports.help = {
	name: 'rol-liste',
	description: 'Sunucuda bulunan rolleri gösterir.',
	usage: 'rol-liste'
}
