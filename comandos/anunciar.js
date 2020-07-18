const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()

    if (!message.member.hasPermission("ADMINISTRATOR") && (message.member.id != '550276653637435403')) return message.reply(`vc nao possui permissao de administrador.`)

    message.channel.send(`Em qual canal vc deseja iniciar?`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                message.reply(`mencione um canal!`)
            } else {
                message.channel.send(`Qual a mensagem desse anuncio?`).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                        message.channel.send(`Qual o titulo?`).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                title = c.content
                                message.channel.send(`anuncio enviado ao canal ${canal} com sucesso`).then(msg => msg.delete({timeout: 10000}));

                                let embed = new Discord.MessageEmbed()

                                .setColor('#0bed00')
                                .setFooter(`Comando efetuado por: ${message.author.username}`, message.author.avatarURL)
                                .setTitle(title)
                                .setDescription(desc)

                                canal.send(embed)
                                canal.send(`@everyone`).then(msg => msg.delete({timeout: 300000}));

                            })
                        })
                    })
                })
            }
        })
    })

}

exports.help = {
    name: 'anuncio'
}