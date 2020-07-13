const Discord = require("discord.js");

exports.run = async(client, message, args) => {
message.channel.send(new Discord.RichEmbed().setColor("006DFF").setDescription("<a:load:731515575284662333> │ Bot Test Ediliyor")).then(k => {setTimeout(() => {k.edit(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> │ Bot Başarıyla Çalışıyor Ping: **${client.ping.toLocaleString()}**`))}, 5000)})

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-kontrol"],
  permLevel: 0
};
exports.help = {
  name: 'botkontrol'
};

