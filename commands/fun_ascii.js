const figlet = require('figlet');

exports.run = async (client, message, args, tools) => {
  if (args.length === 0) return message.reply(':x: h!ascii <Texte à transformer>')  
  if(args.join(' ').length > 20) return message.channel.send('Vous pouvez utiliser seulement 20 caractères !') 
  if (!args.join(' ')) return message.channel.send('Merci d\'inserer un texte de maximum 20 caractères').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};

module.exports.help = {
    name: "ascii"
}