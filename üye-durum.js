const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
    let çevrimiçi = message.guild.members.filter(o => o.presence.status === 'online').size;
    let boşta = message.guild.members.filter(i => i.presence.status === 'idle').size;
    let rahatsız = message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size;
    let çevrimdışı = message.guild.members.filter(off => off.presence.status === 'offline').size;
    let otuz = message.guild.members.filter(üye => !üye.user.bot && new Date().getTime() - üye.joinedAt.getTime() < 30*24*60*60*1000).size
    let onbeş = message.guild.members.filter(üye => !üye.user.bot && new Date().getTime() - üye.joinedAt.getTime() < 15*24*60*60*1000).size
    let birhafta = message.guild.members.filter(üye => !üye.user.bot && new Date().getTime() - üye.joinedAt.getTime() < 7*24*60*60*1000).size
    let birgün = message.guild.members.filter(üye => !üye.user.bot && new Date().getTime() - üye.joinedAt.getTime() < 1*24*60*60*1000).size

const embed = new Discord.RichEmbed()
.setColor("006DFF")
.setThumbnail(message.author.avatarURL)
.setAuthor(`${bot.user.username} - Üye Durum`, bot.user.avatarURL,)
.setDescription(`
\n<:nitro:730465122119712798> │ **Sunucu Üye Durum Bilgi:**
✧ Toplam Üye ➤ \`${üyesayi}\`
✧ Kullanıcılar ➤ \`${kullanıcılar}\`
✧ Botlar ➤ \`${botlar}\`
\n<:nitro:730465122119712798> │ **Son Üye Durum Bilgi:**
✧ Son 30 Günde Gelen Üye ➤ \`${otuz}\`
✧ Son 15 Günde Gelen Üye ➤ \`${onbeş}\`
✧ Son 7 Günde Gelen Üye ➤ \`${birhafta}\`
✧ Son 1 Günde Gelen Üye ➤ \`${birgün}\`
\n<:nitro:730465122119712798> │ **Sunucu Kullanıcı Durum Bilgi:**
✧ Çevrimiçi ➤ \`${çevrimiçi}\`
✧ Boşta ➤ \`${boşta}\`
✧ Rahatsız Etmeyin ➤ \`${rahatsız}\`
✧ Çevrimdışı ➤ \`${çevrimdışı}\`

`)
.setTimestamp()
.setFooter( message.author.tag , message.author.avatarURL )
 
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum", "üyedurumu"],
  permLevel: 0
};

module.exports.help = {
  name: 'üye-durum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üye-durum'
};