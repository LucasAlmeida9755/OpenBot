const Discord = require(`discord.js`);

exports.run = async (client, message, args) => {
    const rng = Math.floor((Math.random() * 100) + 1);

    if (args[0] === 'pedra' && rng > 0 && rng <= 34) {
        const pedra1 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/729709609144811520/730928530304663552/empate.png")
        .addField("Você jogou Pedra","<:pedra:733416325828837376>")
        .addField("Eu joguei Pedra\n","<:pedra:733416325828837376>")
        .addField("**RESULTADO**", [
            "`\`EMPATE!`\`"
        ])
        return message.channel.send(pedra1);
    } else if (args[0] === 'pedra' && rng > 34 && rng <= 67) {
        const pedra2 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/729709609144811520/730928532167065712/perdeu.png")
        .addField("Você jogou Pedra","<:pedra:733416325828837376>")
        .addField("Eu joguei Papel","<:papel:733416325719785687>")
        .addField("**RESULTADO**", [
            "`\`VOCÊ PERDEU!`\`"
        ])
        return message.channel.send(pedra2);
    } else if (args[0] === 'pedra' && rng > 67 && rng <= 100) {
        const pedra3 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/723239918477770843/729382360638029844/ganhou.png")
        .addField("Você jogou Pedra","<:pedra:733416325828837376>")
        .addField("Eu joguei Tesoura","✂️")
        .addField("**RESULTADO**", [
            "`\`VOCÊ GANHOU!`\`"
        ])
        return message.channel.send(pedra3);
    } else if (args[0] === 'papel' && rng > 0 && rng <= 34) {
        const papel1 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/729709609144811520/730928530304663552/empate.png")
        .addField("Você jogou Papel","<:papel:733416325719785687>")
        .addField("Eu joguei Papel\n","<:papel:733416325719785687>")
        .addField("**RESULTADO**", [
            "`\`EMPATE!`\`"
        ])
        return message.channel.send(papel1);
    } else if (args[0] === 'papel' && rng > 34 && rng <= 67) {
        const papel2 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/729709609144811520/730928532167065712/perdeu.png")
        .addField("Você jogou Papel","<:papel:733416325719785687>")
        .addField("Eu joguei Tesoura\n","✂️")
        .addField("**RESULTADO**", [
            "`\`VOCÊ PERDEU!`\`"
        ])
        return message.channel.send(papel2);
    } else if (args[0] === 'papel' && rng > 67 && rng <= 100) {
        const papel3 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/723239918477770843/729382360638029844/ganhou.png")
        .addField("Você jogou Papel","<:papel:733416325719785687>")
        .addField("Eu joguei Pedra\n","<:pedra:733416325828837376>")
        .addField("**RESULTADO**", [
            "`\`VOCÊ GANHOU!`\`"
        ])
        return message.channel.send(papel3);
    } else if (args[0] === 'tesoura' && rng > 0 && rng <= 34) {
        const tesoura1 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/729709609144811520/730928530304663552/empate.png")
        .addField("Você jogou Tesoura","✂️")
        .addField("Eu joguei Tesoura\n","✂️")
        .addField("**RESULTADO**", [
            "`\`EMPATE!`\`"
        ])
        return message.channel.send(tesoura1);
    } else if (args[0] === 'tesoura' && rng > 34 && rng <= 67) {
        const tesoura2 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/729709609144811520/730928532167065712/perdeu.png")
        .addField("Você jogou Tesoura","✂️")
        .addField("Eu joguei Pedra\n","<:pedra:733416325828837376>")
        .addField("**RESULTADO**", [
            "`\`VOCÊ PERDEU!`\`"
        ])
        return message.channel.send(tesoura2);
    } else if (args[0] === 'tesoura' && rng > 67 && rng <= 100) {
        const tesoura3 = new Discord.MessageEmbed()
        .setTitle("__JOKEMPO__")
        .setColor("#0bed00")
        .setThumbnail("https://media.discordapp.net/attachments/723239918477770843/729382360638029844/ganhou.png")
        .addField("Você jogou Tesoura","✂️")
        .addField("Eu joguei Papel\n","<:papel:733416325719785687>")
        .addField("**RESULTADO**", [
            "`\`VOCÊ GANHOU!`\`"
        ])
        return message.channel.send(tesoura3);
    }

    if (args[0] !== 'pedra' || args[0] !== 'papel' || args[0] !== 'tesoura') {
        return message.reply('por favor, insira `pedra`, `papel` ou `tesoura` para jogar!');
    }

}
exports.help = {
    name: "jokempo",
    aliases: ['joke']
}