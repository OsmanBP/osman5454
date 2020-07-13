const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
message.channel.send(new Discord.RichEmbed()
.setColor("006DFF")
.setThumbnail(message.author.avatarURL)
.setAuthor(`${client.user.username} - Bottaki Tüm Komutlar`, client.user.avatarURL,)
.setDescription(`
\n<:nitro:730465122119712798> │ **Sunucudaki Komutlar \`${client.commands.size}\` Tane:**
\n${client.commands.map(props => `\`${prefix}${props.help.name}\``).join(` - `)}
`)
.setTimestamp()
.setFooter( message.author.tag , message.author.avatarURL ))
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
