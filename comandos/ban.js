const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  message.delete()
  const modlog = message.guild.channels.cache.find(channel => channel.name === '『❗』logs');
  let muteChannel = message.guild.channels.cache.find(channel => channel.name === '『❗』logs');
  if (!muteChannel) return message.channel.send('**Favor, Criar um canal chamado 『❗』logs**')
  if(!message.member.permissions.has("BAN_MEMBERS") && (message.member.id != '550276653637435403')) {
    return message.reply("Você não tem a permissão necessária!")
  }
  
  if(!message.guild.me.permissions.has("BAN_MEMBERS") && (message.member.id != '550276653637435403')) {
    return message.reply("Eu não tenho a permissão necessária!")
  }
  
  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!membro) return message.reply("Você precisa mencionar alguem!")
  if(membro.user.id === message.author.id) {
    return message.reply("Você não pode se banir!")
  }
  if(membro.user.id === client.user.id) {
    return message.reply("Por que você quer me banir?")
  }
  if(!membro.bannable) {
    return message.reply("Eu não posso banir este membro!")
  }
  if(membro.permissions.has("ADMINISTRATOR")) {
    return message.reply("Eu não posso banir este membro ele é um administrador")
  }
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"
  
  const embed = new Discord.MessageEmbed()
  .setTitle("OpenBot - Ban")
  .setColor("#0bed00")
  .addField("Membro", `<@${membro.id}>`, false)
  .addField("Administrador", `<@${message.author.id}>`, false)
  .addField("Motivo", motivo, false)
  modlog.send(embed)
  await membro.send(embed)
  membro.ban({reason: motivo})
  
}