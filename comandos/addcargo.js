const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {
    message.delete()
    if (!message.member.hasPermission("MANAGE_ROLES") && (message.member.id != '550276653637435403'))  return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`)
    const usuario = message.mentions.members.first()
    const cargo = message.mentions.roles.first()

    if(!usuario || !cargo) return
    if(usuario.roles.cache.has(cargo)) return message.channel.send('Esse usuário já possui esse cargo')

    message.guild.roles.cache.find(a => a === cargo)
    usuario.roles.add(cargo)
    message.channel.send(`O usuário ${usuario} ganhou o cargo ${cargo}`)
};

module.exports.help = {
    name: "addrole"
}