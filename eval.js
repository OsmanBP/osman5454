const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();

exports.run = (client, message, args) => {
if(message.author.id !== ayarlar.sahip) return message.channel.send("<a:dikkat:730464635873919039> │ Bu Komutu Kullanabilmek için **Botun Sahibi** Olman Gerek")
try {
let codein = args.join(" ");
let code = eval(codein)
      
if (codein.length < 1) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> │ Herhangibir Kod Girmelisin`))
if (typeof code !== 'string')    
code = require('util').inspect(code, { depth: 0 });
message.channel.send(new Discord.RichEmbed().setColor("33FF00").setDescription(`<a:do:731500590945009694> │ Kod Uygulandı\`\`\`js\n${codein}\`\`\``)).then(o => o.delete("10000"))
} catch(e) {
message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription(`<a:ya:731500590949203999> │ Hatalı Kullanım\`\`\`js\n${e}\`\`\``))

}};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'eval'
};