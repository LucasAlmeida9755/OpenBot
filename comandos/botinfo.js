const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let botembed = new Discord.MessageEmbed()
  .setTitle("  **<a:jump:733425836279070720>|Sobre Mim!**")
  .setDescription("🤖 **Olá!** Eu me chamo OpenBot e sou um simples bot para o Discord. Fui criado com o intuito de auxiliar os servidores na moderação, na diversão, em utilidades, na configuração e etc.")
  .setColor("#0bed00")
  .setThumbnail(client.user.displayAvatarURL())
  .setFooter(`Comando efetuado por: ${message.author.username}`, message.author.avatarURL)
  .addField('🦡| Informações Pessoais: ', [ 
				`📋 Meu Nome: **OpenBot**`,
				`📆 Data de Criação: **16/07/2020**`,
       "👑 Meus Criadores: <@714902793772597330> **|** <@272011704676777995> **|** <@463421520686088192> **|** <@550276653637435403>",
       "🆔 Meu Id: ``733392270996406334``",
       `\u200b`
   ])

.addField('<:estatisticas:733415825087660122>| Estatísticas: ',
      [
       `🌎 Servidores: **${client.guilds.cache.size}** `, 
       `<:hastag:733416102935265371> Canais: **${client.channels.cache.size}**`,
       `<:user:733415825402495117> Usuários: **${client.users.cache.size}**`,
       `\u200b`
])

.addField('<:config:733416324122017883>| Outros:',
         [
          '🔧 Meu Prefix: ``.``',
          '📖 Linguagem: <:javascript:733417136596320347> ``JavaScript``',
           `\u200b` 
         ])

.addField('🔗| Links',
         [
         '<a:check:733419806027415614>| Me Adicione no seu servidor! \n <a:colorida2:733416324218224730> [Clique aqui](https://discord.com/oauth2/authorize?client_id=733392270996406334&scope=bot&permissions=8)',
         '<a:panda:733419743356125286>| Servidor de Suporte \n <a:colorida2:733416324218224730> [Clique aqui](https://discord.gg/E8bUCgN)',
         ])
         
   	 message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo",
  aliases: ["infobot"]
}