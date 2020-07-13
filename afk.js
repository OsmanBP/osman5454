const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
var zaman = new Date().getTime()
var sebep = args.join(" ")
if (!sebep) sebep = "Yazılmamış"
db.set(`kullanicilar.${message.author.id}.afk`, `{"zaman": "${zaman}", "sebep": "${sebep}"}`)
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> │ Başarıyla **${sebep}** Sebebinden Dolayı AFK Moduna Geçildi`))

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["afk-modu"],
  permLevel: 0,
};
exports.help = {
name: 'afk',
};