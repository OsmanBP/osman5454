const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription('<a:ya:731500590949203999> | Lütfen Bir Oyuncu İsmi Yaz'))
 if (mesaj == member) {
    message.channel.send(new Discord.RichEmbed().setColor("FF0000").setDescription('<a:ya:731500590949203999> | Lütfen Bir Oyuncu İsmi Yaz'))
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('006DFF')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["mc-skin"],
 permLevel: 0
};

exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcskin'
};