const Discord = require('discord.js')
const db = require('quick.db')
const cd = new Set()

exports.run = async (cora, message, args) => {
  
  let user = message.author;
  const usuarios = new db.table('usuarios')
  

  if(!cd.has(message.author.id)) {
    cd.add(message.author.id)

    message.channel.send("🏧 | **" + user.username + ", pegou o bonus diario e recebeu 💵 5000 coins!**")
    usuarios.add(`${message.guild.id}_${user.id}.money`, 5000)

    setTimeout(() => {cd.delete(message.author.id)}, 86400000)
      } else {
          message.reply("Aguarde 1 dia para poder receber seu bonus novamente!")
      }
  
   
  
}