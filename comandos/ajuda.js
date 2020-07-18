const Discord = require(`discord.js`);



exports.run = async (bot,message,args) => {

    let embed = new Discord.MessageEmbed()
    .setColor(`#0bed00`)
    .setTitle(`Ajuda - OpenBot`)
    .setDescription(`Reaja com 🚓 para ver comandos de administração.` +
    `\n Reaja com 🎮 para ver comandos de entretenimento.` +
    `\n Reaja com 🔦 para ver comandos de utilidades.` +
    `\n Reaja com ⚠️ para ver comandos de informações.` +
    `\n Reaja com 💸 para ver comandos de economia` +
    `\n Reaja com 🔞 para ver comandos +18.`)
    
    message.channel.send(message.author, embed).then(msg => { //quando enviar a mensagem...
        msg.react(`⬅️`).then(() => { //quando reagir o primeiro emoji...
        msg.react(`🚓`);
        msg.react(`🎮`);
        msg.react(`🔦`);
        msg.react(`⚠️`);
        msg.react(`💸`);
        msg.react(`🔞`);
        })


        const administracao = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🚓` && user.id == message.author.id, {time: 60000}) //time: tempo, 1000 = 1sec, 10000 = 10sec
        const entraterimento = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🎮` && user.id == message.author.id, {time: 60000}) //time: tempo, 1000 = 1sec, 10000 = 10sec
        const utilidades = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🔦` && user.id == message.author.id, {time: 60000}) //time: tempo, 1000 = 1sec, 10000 = 10sec
        const informacoes = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⚠️` && user.id == message.author.id, {time: 60000}) //time: tempo, 1000 = 1sec, 10000 = 10sec
        const economia = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `💸` && user.id == message.author.id, {time: 60000}) //time: tempo, 1000 = 1sec, 10000 = 10sec
        const mais18 = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🔞` && user.id == message.author.id, {time: 60000}) //time: tempo, 1000 = 1sec, 10000 = 10sec
        const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⬅️` && user.id == message.author.id, {time: 60000})
        administracao.on(`collect`, r =>{  //quando coletar

            let embed_two = new Discord.MessageEmbed()
            .setColor(`#0bed00`)
            .setTitle(`Administração - OpenBot`)
            .addField(".<comando>", "Addcargo <@usuario> <@cargo> - Adiciona cargo a um usuario" +
            "\n Say <Mensagem> - faça o OpenBot enviar sua mensagem" +
            `\n Ban <@usuario> <motivo> - Utilize para banir um membro` +
            `\n Joincargo <@cargo> - Quando alguem entrar no servidor recebera o cargo mencionado (so recebe o ultimo cargo setado)` +
            `\n Anunciar - anuncie uma mensagem` +
            `\n Joinchat <#chat> - ao entrar seria enviada uma msg de boas vindas no chat desejado`)
            .setDescription(`Seja bem-vindo aos comandos de administração`)
            msg.edit(embed_two)
    r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
        })

        entraterimento.on(`collect`, r =>{  //quando coletar

            let embed_two = new Discord.MessageEmbed()
            .setColor(`#0bed00`)
            .setTitle(`Entreterimento - OpenBot`)
            .addField(".<comando>", "Abracar <@usuario> - Abraçe um usuario" +
            `\n Tapa <@usuario> - de um tapa em um usuario` +
            `\n Dog - Mostra uma foto de um cachorro fofo` +
            `\n Cat - Mostra uma foto de um gato fofo` +
            `\n Ascii <msg, até 20 caracteres> - Monta sua mensagem em ascii` +
            `\n Jokempo - Jogue \`\`pedra, papel e tesoura com o bot\`\``)
            .setDescription(`Seja bem-vindo aos comandos de entraterimento`)
            msg.edit(embed_two)
    r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
        })

        utilidades.on(`collect`, r =>{  //quando coletar

            let embed_two = new Discord.MessageEmbed()
            .setColor(`#0bed00`)
            .setTitle(`Utilidades - OpenBot`)
            .addField(".<comando>", "Ajuda - Use este comando para abrir o painel de ajuda" +
            `Avatar (@usuario) - Baixe o avatar de algum usuario`)
            .setDescription(`Seja bem-vindo aos comandos de utilidades`)
            msg.edit(embed_two)
    r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
        })

        informacoes.on(`collect`, r =>{  //quando coletar

            let embed_two = new Discord.MessageEmbed()
            .setColor(`#0bed00`)
            .setTitle(`Informações - OpenBot`)
            .addField(".<comando>", "Botinfo - Veja as informações do bot" +
            `\n Ping - Veja o ping do bot e da api` +
            `\n Uptime - Veja o tempo que o bot esta online` +
            `\n Membros - Veja a quantidade de membros no seu servidor`)
            .setDescription(`Seja bem-vindo aos comandos de informações`)
            msg.edit(embed_two)
    r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
        })

        economia.on(`collect`, r =>{  //quando coletar

            let embed_two = new Discord.MessageEmbed()
            .setColor(`#0bed00`)
            .setTitle(`economia - OpenBot`)
            .addField(".<comando>", "Bonus - Receba seu bonus diario" +
            `\n Trabalhar - Trabalhe a cada meia hora` +
            `\n Saldo - Veja seu saldo` +
            `\n Addsaldo <@usuario> quantia - Adicione saldo a um usuario` +
            `\n Remsaldo <@usuario> quantia - Remova saldo de um usuario` +
            `\n Zerarsaldo <@usuario> - Zere o saldo de um usuario`)
            .setDescription(`Seja bem-vindo aos comandos de informações`)
            msg.edit(embed_two)
    r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
        })

        mais18.on(`collect`, r =>{  //quando coletar

            let embed_two = new Discord.MessageEmbed()
            .setColor(`#0bed00`)
            .setTitle(`+18 - OpenBot`)
            .addField(".<comando>", `Peitos - Veja peitos\nBundas - Veja bundas`)
            .setDescription(`Seja bem-vindo aos comandos para maiores de idade`)
            msg.edit(embed_two)
    r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
        })

        voltar.on(`collect`, r =>{ //quando coletar
            let embed_three = new Discord.MessageEmbed()
    .setColor(`#0bed00`)
    .setTitle(`Ajuda - OpenBot`)
    .setDescription(`Reaja com 🚓 para ver comandos de administração.` +
    `\n Reaja com 🎮 para ver comandos de entraterimento.` +
    `\n Reaja com 🔦 para ver comandos de utilidades.` +
    `\n Reaja com ⚠️ para ver comandos de informações.` +
    `\n Reaja com 💸 para ver comandos de economia` +
    `\n Reaja com 🔞 para ver comandos +18.`)
    msg.edit(embed_three)
    r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
        })
    })
}