const Discord = require('discord.js');
const weather = require('weather-js');
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
if (result === undefined || result.length === 0) {
message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> | Bir Yer Girmelisin Örnek: **${prefix}hava Sakarya** <a:dikkat:730464635873919039>`))
return;
}
var current = result[0].current;
var location = result[0].location;
const embed = new Discord.RichEmbed()
.setColor("006DFF")
.setThumbnail(message.author.avatarURL)
.setAuthor(`${client.user.username} - ${current.observationpoint} Hava Durumu`, client.user.avatarURL,)
.setDescription(`
\n<:nitro:730465122119712798> | **Hava Durumu İstatistikleri:**
\n✧ Derece Türü ➤ \`°C\`
✧ Sıcaklık ➤ \`${current.temperature}\`
✧ Hissedilen Sıcaklık ➤ \`${current.feelslike}\`
✧ Rüzgar ➤ \`${current.winddisplay}\`
✧ Nem ➤ \`%${current.humidity}\`
`)
.setTimestamp()
.setFooter( message.author.tag , message.author.avatarURL )
message.channel.send({embed});
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hava'],
  permLevel: 0
};

exports.help = {
  name: "havadurumu",
  description: "hava durumunu gösterir",
  usage: "havadurumu"
};