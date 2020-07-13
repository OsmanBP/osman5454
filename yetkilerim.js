const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
//yönetici
if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:ya:731500590949203999>"
    
//Denetim kaydı
if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:ya:731500590949203999>"
    
//Sunucuyu yönet
if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:ya:731500590949203999>"
    
//Rolleri yönet
if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:ya:731500590949203999>"
    
//Kanalları yönet
if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:ya:731500590949203999>"
    
//üyeleri at
if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:ya:731500590949203999>"
    
//üyeleri yasakla
if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:ya:731500590949203999>"
    
//mesajları yönet
if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:ya:731500590949203999>"
    
//kullanıcı adlarını yönet
if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:do:731500590945009694>"
 if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:ya:731500590949203999>"
    
//emojileri yönet
if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:ya:731500590949203999>"
    
//webhookları yönet
if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:do:731500590945009694>"
if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:ya:731500590949203999>"
    
msg.channel.send(
new Discord.RichEmbed()
.setColor("006DFF")
.setTimestamp()
.setThumbnail(msg.author.avatarURL)
.setFooter(msg.author.tag, msg.author.avatarURL)
.setAuthor(`${client.user.username} - Sunucudaki Yetkilerin`, client.user.avatarURL)
.setDescription(`  
${x} | Yönetici  
${x2} | Denetim Kaydını Görüntüle  
${x4} | Sunucuyu Yönet 
${x5} | Rolleri Yönet 
${x6} | Kanalları Yönet  
${x7} | Üyeleri At  
${x8} | Üyeleri Yasakla 
${x8} | Mesajları Yönet  
${x9} | Kullanıcı Adlarını Yönet 
${x10} | Emojileri Yönet  
${x11} | Webhook'ları Yönet 
`))}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilerim'],
  permLevel: 0,
};
exports.help = {
name: 'izinlerim'
};