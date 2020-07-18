const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.reply('Você não tem permissão para utilizar este comando');
    }

      
    //let user = message.author;

    let { user } = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member


    const usuarios = new db.table('usuarios')

    let money = usuarios.delete(`${message.guild.id}_${user.id}.money`, true)
    if (money == null || money == undefined) money = 0;
    

    



  const embed = new Discord.MessageEmbed()
    .setColor("#0bed00")
    .setAuthor("dinheiro zerado do(a): " +user.username, user.avatarURL({dynamic: true}))
    .setThumbnail(user.avatarURL({dynamic: true}))
    .setDescription("Agora o usuario: " + user.username + " está com R$0 Coins")
    .setTimestamp();

  await message.channel.send(embed);

}