const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")

exports.run = function(client, message) {

if(message.author.id !== ayarlar.sahip) return message.channel.send(`Bu Komutu Kullanabilmek için **Botun Sahibi** Olman Gerek`)
message.channel.send(new Discord.RichEmbed().setColor("006DFF").setDescription("<a:load:731515575284662333> │ Bot Yeniden Başlatılıyor")).then(msg => {
console.log("Bot Yeniden Başlatıldı !");
process.exit(0);

});};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["r"],
  permLevel: 0
};
exports.help = {
name: 'reboot', 
};
