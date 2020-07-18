const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {

    message.delete()

    if (!message.member.hasPermission("ADMINISTRATOR") && (message.member.id != '550276653637435403'))  return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`)

    const canal = message.mentions.channels.first();
    if (!canal) return message.channel.send('Canal inválido.');

    db.set(`canal_${message.guild.id}`, canal.id);

    let user =  message.author;

    let canalw = new Discord.MessageEmbed()
    .setColor("#0bed00")
    .setAuthor("Agora ao entrar no servidor seus membros receberão mensagem de bem vindo no canal", user.avatarURL({dynamic: true}))
    .setDescription(canal)

    message.channel.send(canalw);
}