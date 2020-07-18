const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const db = require("quick.db");

client.on("ready", () => { //aqui pegamoso ready (quando o bot estiver iniciado) e executamos algo quando ele iniciar

  let activities = [ // aqui criamos um let, que seria uma "variavel"
    'Me adicione em seu servidor', //setamos cada variavel dentro da let
    'Criado no dia 16/07/2020',
    'Obrigado por utilizar OpenBot',
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { //criamos um intervalo, no intervalo pegamos o cliente que seria o discord, depois o usuario que seria o bot e setamos a atividade dele no let activities que criamos la em cima
    type: "WATCHING" //WATCHING, LISTENING, PLAYING, STREAMING - setamos o que ele esta fazendo ex: assistindo
  }), 5000);// aqui definimos o tempo e milisegundos


  console.log(`\n-=-=-=-=-=O bot foi iniciado=-=-=-=-=-\nUsuarios: ${client.users.cache.size}\nCanais: ${client.channels.cache.size}\nGrupos: ${client.guilds.cache.size}\n\n-=-=-=-=-= LOGS =-=-=-=-=-`);

});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
      let embed = new Discord.MessageEmbed()
      .setTitle("__ME MARCOU?__")
      .setDescription(`Olá ${message.author}, tudo bem? Espero que sim!\nBom, se você me marcou, então está procurando ajuda!\nEu tenho apenas um dica para te dar!\n**Use <a:colorida2:733416324218224730>\`\`.ajuda\`\`**`)
      .setThumbnail(message.author.displayAvatarURL())
      .setColor(0x2f3136)
      .setFooter(`Open BOT | Todos os direitos reservados.`, client.user.displayAvatarURL())
      return message.channel.send(embed)
}
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;

  if (!message.member.hasPermission('ADMINISTRATOR')) { //só vai bloquear o invite caso quem o enviou não tenha permissão de admin

    if (message.content.includes('discord.gg/' || 'discordapp.com/invite/')) { //reconhece se há um invite na mensagem

      message.delete() //deleta a msg com invite
        .then(message.channel.send(`${message.author}, você não pode enviar convites de servidores aqui!`));
    }
  }

  var comando = message.content.toLowerCase().split(" ")[0];
  comando = comando.slice(config.prefix.length);

  var args = message.content.split(" ").slice(1);
  try {
    var arquivoComando = require(`./commands/${comando}.js`);
    arquivoComando.run(client, message, args);
  } catch (erro) {
    let embed = new Discord.MessageEmbed()
    .setTitle("__COMANDO ERRADO__")
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Comando: **__${comando}__** não encontrado!\n\nEle foi digitado incorretamente! Verifique sua ortografia ou utilize \`\`.ajuda\`\` para saber mais sobre meus comandos!`)
    .setColor(`#0bed00`)
    .setFooter(`Open BOT | Todos os direitos reservados.`, client.user.displayAvatarURL())
    message.channel.send(embed)
    console.log(erro);
  }
});

client.on('guildMemberAdd', member => {

  if (db.has(`cargo_${member.guild.id}`)) { // cargo ao entrar
    const cargo = db.get(`cargo_${member.guild.id}`);
    member.roles.add(cargo)
  }
  
  if (db.has(`canal_${member.guild.id}`)) {//mensagem de boas vindas
  const canal = db.get(`canal_${member.guild.id}`);
  client.channels.cache.get(canal).send(`Bem vindo ${member}, iremos mudar esta mensagem em breve...`)
  }

  member.send("Oiiie :3")
}); 

client.on("guildCreate", async guild => {
  const enviar = client.guilds.cache.get("733388719398191238").channels.cache.get("733649450131652649")


  let canal = "";

  guild.channels.cache.forEach((channel) => {

    if (channel.type == "text" && canal == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        canal = channel;
      }
    }

  });

  let convite = await canal.createInvite({
    maxAge: 0,
    maxUses: 0
  })

  let entrei = new Discord.MessageEmbed()
    .setThumbnail()
    .setTimestamp()
    .setTitle("Clique aqui para me adicionar")
    .addField(`Nome do servidor:`, `${guild.name}`)
    .setDescription(`Acabei de entrar no servidor, entre vc tambem: ${convite}`)
    .setURL()

  let oiew = new discord.MessageEmbed()
    .setThumbnail()
    .setTimestamp()
    .setTitle("Oieew :3 entreii")
    .setDescription("Clique aqui para acessar meu servidor de suporte")
    //.setURL("https://discord.gg/YcTPwsr")
    .addField("Obrigado por me adicionar em seu servidor.", "Em meu servidor de suporte, temos varios avisos! entre la")

  canal.send(oiew);
  enviar.send(entrei)
});

client.login(process.env.TOKEN);