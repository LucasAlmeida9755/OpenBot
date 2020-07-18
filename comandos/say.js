const Discord = require("discord.js");

 module.exports.run = async(client, message, args) => {
    message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("sem perm")
    if (!args.join(" ")) return message.reply("Digite algo!");
    let say = args.join(' ');
    message.channel.send(say);
    }

module.exports.help = {
  name: "say",
  aliases: ['s']
}
