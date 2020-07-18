const Discord = require('discord.js')

   module.exports.run = async(client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("permissĂµes insuficientes.");
    
var list = [
        'https://i.imgur.com/r9aU2xv.gif',
        'https://i.imgur.com/wOmoeF8.gif',
        'https://i.imgur.com/ntqYLGl.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];

    var reason = message.content.split(" ").slice(1).join(" ");

    const embed1 = new Discord.MessageEmbed()
  .setDescription(`:couple: **${message.author.username} deu um tapa em ${reason}.**`)
  .setColor("#0bed00")
  .setImage(rand)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  .setFooter("OpenBot - Todos os direitos reservados\n")
  message.channel.send({embed: embed1}); 
}
module.exports.help = {
  name: "tapa",
  aliases: ['t']
}
