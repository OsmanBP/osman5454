const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
 var cevaplar = ["Boks Makinesi Skoru: \`1\` ", 
                 "Boks Makinesi Skoru: \`2\` ",
                 "Boks Makinesi Skoru: \`3\` ",
                 "Boks Makinesi Skoru: \`4\` ",
                 "Boks Makinesi Skoru: \`5\` ",
                 "Boks Makinesi Skoru: \`6\` ",
                 "Boks Makinesi Skoru: \`7\` ",
                 "Boks Makinesi Skoru: \`8\` ",
                 "Boks Makinesi Skoru: \`9\` ",
                 "Boks Makinesi Skoru: \`10\` ",
                 "Boks Makinesi Skoru: \`11\` ",
                 "Boks Makinesi Skoru: \`12\` ",
                 "Boks Makinesi Skoru: \`13\` ",
                 "Boks Makinesi Skoru: \`14\` ",
                 "Boks Makinesi Skoru: \`15\` ",
                 "Boks Makinesi Skoru: \`16\` ",
                 "Boks Makinesi Skoru: \`17\` ",
                 "Boks Makinesi Skoru: \`18\` ",
                 "Boks Makinesi Skoru: \`19\` ",
                 "Boks Makinesi Skoru: \`20\` ",
                 "Boks Makinesi Skoru: \`21\` ",
                 "Boks Makinesi Skoru: \`22\` ",
                 "Boks Makinesi Skoru: \`23\` ",
                 "Boks Makinesi Skoru: \`24\` ",
                 "Boks Makinesi Skoru: \`25\` ",
                 "Boks Makinesi Skoru: \`26\` ",
                 "Boks Makinesi Skoru: \`27\` ",
                 "Boks Makinesi Skoru: \`28\` ",
                 "Boks Makinesi Skoru: \`29\` ",
                 "Boks Makinesi Skoru: \`30\` ",
                 "Boks Makinesi Skoru: \`31\` ",
                 "Boks Makinesi Skoru: \`32\` ",
                 "Boks Makinesi Skoru: \`33\` ",
                 "Boks Makinesi Skoru: \`34\` ",
                 "Boks Makinesi Skoru: \`35\` ",
                 "Boks Makinesi Skoru: \`36\` ",
                 "Boks Makinesi Skoru: \`37\` ",
                 "Boks Makinesi Skoru: \`38\` ",
                 "Boks Makinesi Skoru: \`39\` ",
                 "Boks Makinesi Skoru: \`40\` ",
                 "Boks Makinesi Skoru: \`41\` ",
                 "Boks Makinesi Skoru: \`42\` ",
                 "Boks Makinesi Skoru: \`43\` ",
                 "Boks Makinesi Skoru: \`44\` ",
                 "Boks Makinesi Skoru: \`45\` ",
                 "Boks Makinesi Skoru: \`46\` ",
                 "Boks Makinesi Skoru: \`47\` ",
                 "Boks Makinesi Skoru: \`48\` ",
                 "Boks Makinesi Skoru: \`49\` ",
                 "Boks Makinesi Skoru: \`50\` ",
                 "Malesef  Ölçülemeyecek Kadar Yavaş Vurdun",
                 "Aga Yavaş Ol Makineyi Kırcan Ölçemedi Makine",
                 "Galiba yeni Rekoru Kırdın O Nasıl Bir Hızdı",
                 "Rüzgar Bile Daha Çok Vuruyo O Makineye",
                 "Evet Makine Parasını Alalım Kırdın Makineyi",
                 "En Son \`99\` Yazısını Gördüm Sonra Makine Bozuldu",
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor("006DFF")
 .setDescription(`
 \n<a:box:723162305503690772> | **${cevap}** 
 `)
.setTimestamp()
.setThumbnail("https://i.makeagif.com/media/8-14-2016/baNHMY.gif")
.setFooter( message.author.tag , message.author.avatarURL )
.setAuthor(`${client.user.username} - Boks Makinesi`, client.user.avatarURL,)
 return  message.channel.send(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: "vur",
   description: "Boks Makinesine Vurursun",
   usage: "vur"
}