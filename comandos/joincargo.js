const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {

    message.delete()

    if (!message.member.hasPermission("MANAGE_ROLES"))  return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`)
    
    const cargo = message.mentions.roles.first();
    if (!cargo) return message.channel.send('Utilize .joinrole <@cargo>.');

    db.set(`cargo_${message.guild.id}`, cargo.id);

    let user =  message.author;

    let joinrole = new Discord.MessageEmbed()
    .setColor("#0bed00")
    .setAuthor("Agora ao entrar no servidor seus membros receberão o cargo", user.avatarURL({dynamic: true}))
    .setDescription(cargo)

    message.channel.send(joinrole);
}