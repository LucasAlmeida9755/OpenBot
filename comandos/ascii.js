const Discord = require("discord.js");
var figlet = require('figlet');
  
module.exports.run = (bot,message,args) => {

  message.delete();

  var maxLen = 20 // maximo de caracteres(você pode aumentar, mas recomendo 20, se não pode bugar)
  
  if(args.join(' ').length > maxLen) return message.channel.send('O máximo de caracteres permitidas são 20!') // se o texto passar de 20 caracteres o bot vai retornar essa mensagem
  
  if(!args[0]) return message.channel.send('Por favor, digite algo com até 20 caracteres!'); // Se ninguém digitar nada
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Algo deu errado...'); // mensagem no console caso aconteça algum erro
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });
}