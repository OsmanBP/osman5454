
const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();


exports.run = async (bot, msg, args) => {
  let user = msg.mentions.users.first() || msg.author;
  const kurulus = new Date().getTime() - user.createdAt.getTime();
    var kontrol;    const gün = moment.duration(kurulus).format("D")   

    if (kurulus < 1296000000) kontrol = '\`Güvenilir Değil\` <a:ya:731500590949203999>'
    if (kurulus > 1296000000) kontrol = '\`Güvenilir\` <a:do:731500590945009694>'
  

let userinfo = {};
userinfo.avatar= user.displayAvatarURL;
userinfo.id = user.id;
userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Oynadığı Oyun Bulunmuyor"
userinfo.status = user.presence.status.toString()
.replace("dnd", `"\`Rahatsız Etme\`" :red_circle:`)
.replace("online", `\`Çevrimiçi\` :green_circle:`)
.replace("idle", `\`Boşta\` :yellow_circle:`)
.replace("offline", `\`Çevrimdışı\` :new_moon:`)
userinfo.bot = user.bot.toString()
.replace("false", `\`Hayır\` <a:ya:731500590949203999>`)
.replace("true", `\`Evet\` <a:do:731500590945009694>`)
userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('YYYY [Yılında] MMMM [Ayında] dddd [Gününde] (DD/MM/YYYY)')
.replace("Monday", `Pazartesi`)
.replace("Tuesday", `Salı`)
.replace("Wednesday", `Çarşamba`)
.replace("Thursday", `Perşembe`)
.replace("Friday", `Cuma`)
.replace("Saturday", `Cumartesi`)
.replace("Sunday", `Pazar`)
.replace("January", `Ocak`)
.replace("February", `Şubat`)
.replace("March", `Mart`)
.replace("April", `Nisan`)
.replace("May", `Mayıs`)
.replace("June", `Haziran`)
.replace("July", `Temmuz`)
.replace("August", `Ağustos`)
.replace("September", `Eylül`)
.replace("October", `Ekim`)
.replace("November", `Kasım`)
.replace("December", `Aralık`)
userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('YYYY [Yılında] MMMM [Ayında] dddd [Gününde] (DD/MM/YYYY)')
.replace("Monday", `Pazartesi`)
.replace("Tuesday", `Salı`)
.replace("Wednesday", `Çarşamba`)
.replace("Thursday", `Perşembe`)
.replace("Friday", `Cuma`)
.replace("Saturday", `Cumartesi`)
.replace("Sunday", `Pazar`)
.replace("January", `Ocak`)
.replace("February", `Şubat`)
.replace("March", `Mart`)
.replace("April", `Nisan`)
.replace("May", `Mayıs`)
.replace("June", `Haziran`)
.replace("July", `Temmuz`)
.replace("August", `Ağustos`)
.replace("September", `Eylül`)
.replace("October", `Ekim`)
.replace("November", `Kasım`)
.replace("December", `Aralık`)   
const uembed = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setAuthor(user.tag, userinfo.avatar)
.setColor('03f2df')
.setDescription(`   
\n<:nitro:730465122119712798> │ **Kullanıcı Detayları:**
✧ Kullanıcı İsim ➤ \`${user.tag}\`
✧ Kullanıcı ID ➤ \`${userinfo.id}\`
✧ Şuanki Oynadığı Oyun ➤  \`${userinfo.od1}\`
✧ Durum ➤ ${userinfo.status}
✧ Botmu ➤ ${userinfo.bot}
✧ Güvenlik ➤ ${kontrol}
<:nitro:730465122119712798> │ **Sunucu Katılım Tarihi:** \`\`\`\n${userinfo.dctarihkatilma}\`\`\`
<:nitro:730465122119712798> │ **Discord Katılım Tarihi:** \`\`\`\n${userinfo.dctarih}\`\`\`
<:nitro:730465122119712798> │ **Sahip Roller:**\n${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' ') || "\`Bu Kullanıcıda Rol Bulunmuyor\`"}      
`)
msg.channel.send(uembed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kullanıcıbilgi","kb"],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};

