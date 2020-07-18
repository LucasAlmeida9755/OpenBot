const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.reply('Você não tem permissão para utilizar este comando');
    }
      
    //let user = message.author;

    let { user } = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

    const usuarios = new db.table('usuarios')

    let quantia = args[1]

    if(isNaN(quantia)) {
        return message.reply("Utilize .addsaldo <@usuario> quantia")
    }

    let money = usuarios.add(`${message.guild.id}_${user.id}.money`, quantia)
    if (money == null || money == undefined) money = 0;
    

    



  const embed = new Discord.MessageEmbed()
    .setColor("#0bed00")
    .setAuthor("Dinheiro adicionado para: " + user.username, user.avatarURL({dynamic: true}))
    .setThumbnail(user.avatarURL({dynamic: true}))
    .setDescription("R$"+ quantia +" Coins adicionados")
    .setTimestamp();

  await message.channel.send(embed);

}