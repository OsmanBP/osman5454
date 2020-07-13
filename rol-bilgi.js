const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client,message,args) => {
  var rol = message.content.split(" ").slice(1).join(" ") 
  let role = message.guild.roles.find("name", `${rol}`)
  let kur = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
}
  if (!rol) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription("<a:ya:731500590949203999> │ Lütfen Bir Rol İsmi Yaz"))
  var moment = require("moment");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('006DFF')
  .setThumbnail(message.author.avatarURL)
  .setDescription(`
✧ Rol İsmi ➤ \`${role.name}\`
✧ Rol Etiket ➤ <@&${role.id}>
✧ ID ➤ \`${role.id}\` 
✧ Role Sahip Kullanıcılar ➤ \`${role.members.size}\`
✧ Renk ➤ \`${role.hexColor}\`
✧ Etiketleme ➤ ${role.mentionable ? '<a:do:731500590945009694>' : '<a:ya:731500590949203999>'}
✧ Oluşturulduğu Zaman ➤ \`${moment(role.createdAt).format('DD')} ${kur[moment(role.createdAt).format('MM')]} ${moment(role.createdAt).format('YYYY h:mm:ss')}\``)
  .setTimestamp()
  .setFooter( message.author.tag , message.author.avatarURL )
  .setAuthor(`${client.user.username} - Rol Bilgi `, client.user.avatarURL)
  message.channel.send(roleinfoEmbed)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolbilgi'],
  permLevel: 0
};
exports.help = {
name: 'rol-bilgi'
};
