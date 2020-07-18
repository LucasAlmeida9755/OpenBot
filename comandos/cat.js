const fetch = require('node-fetch');
const Discord = require("discord.js");
const Reddit = require('../reddit');

exports.run = async (client, message, args) => {

    let reddit = [
        "cat",
        "gatos",
        "gato"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    const random = await Reddit.getRandom(`/r/${subreddit}`)

    message.channel.startTyping();

    let embed = new Discord.MessageEmbed()
    .setTitle(`__GATOS__ <a:cat:727532576847429732>`)
    .setColor('#0bed00')
    .setFooter(`Comando dado por: ${message.author.username}`, message.author.displayAvatarURL())
    .setImage(random.url)

    message.channel.send(embed)
    message.channel.stopTyping();

}

exports.help = {
    name: 'cat',
    aliases: ['gato', 'gatos']
}