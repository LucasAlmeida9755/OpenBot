const fetch = require('node-fetch');
const Discord = require("discord.js");
const Reddit = require('../reddit');

exports.run = async (bot, message, args) => {

    let reddit = [
        "dog",
        "cachorro",
        "cão"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    const random = await Reddit.getRandom(`/r/${subreddit}`)

    message.channel.startTyping();

    let embed = new Discord.MessageEmbed()
    .setTitle(`__CACHORROS__ <a:dog:727533105685987379>`)
    .setColor('#0bed00')
    .setFooter(`Comando dado por: ${message.author.username}`, message.author.displayAvatarURL())
    .setImage(random.url)

    message.channel.send(embed)
    message.channel.stopTyping();

}

exports.help = {
    name: 'dog',
    aliases: ['cachorro', 'cachorros']
}