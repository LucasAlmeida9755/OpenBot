const Discord = require('discord.js')

 module.exports.run = async(client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: PermissĂµes insuficientes.");
    
    var reason = message.content.split(" ").slice(1).join(" ");
    const embed1 = new Discord.MessageEmbed()
  .setDescription(`O servidor tem **${message.guild.memberCount} membros** no momento! <a:jump:733425836279070720>`)
  .setColor('#0bed00')
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  .setFooter("OpenBot - Todos os direitos reservados\n")
  message.channel.send({embed: embed1}); 
    }
module.exports.help = {
  name: "membros",
  aliases: ['m']
}