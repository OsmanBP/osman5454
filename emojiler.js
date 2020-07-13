const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
   {
     const emojiList = message.guild.emojis.map((e) => ('' + e)).join('\n');
     if(message.guild.emojis.size < 1) return message.channel.send("<a:dikkat:730464635873919039> │ Sunucuda Emoji Bulunmamaktadır")
      var emojis = message.guild.emojis.array();
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} - Sunucudaki Emojiler`, client.user.avatarURL,)
.setColor("006DFF")
.setDescription(`**Emojiler \`${emojis.length}\` Tane:**\n${message.guild.emojis.map(e => e.toString()).join('    ')}`)
 message.channel.send(embed);
        return
  }
    
}


exports.conf = {
    enabled: true,
    guildOnly: false,
  aliases: ["emoji"],
  permLevel: 0
  }

exports.help = {
    name: 'emojiler',
    description: 'Sunucuda bulunan emojileri gösterir.',
    usage: 'emoji'
}