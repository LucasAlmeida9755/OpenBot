const { MessageEmbed } = require('discord.js')

module.exports.run = async(client, message, args) => {
        const msg = await message.channel.send(`Calculando...`)
        msg.edit(`\`\`\`css\nPing: ${parseInt(msg.createdAt - message.createdAt)}\nAPI: ${parseInt(client.ws.ping)}\n\`\`\``)
    }

module.exports.help = {
  name: "ping",
  aliases: ['pong']
}