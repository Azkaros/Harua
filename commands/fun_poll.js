const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let question = args.slice(0).join(" ");
  
    if (args.length === 0) return message.reply('h!poll <Posez votre sondage ici>')
  
  message.delete()
    const pollEmbed = new Discord.RichEmbed()
        .setTitle("Nouveau sondage !")
        .setColor("#ffcccc")
        .setTimestamp()
        .setDescription(`${question}`)
        .setFooter(`crée par: ${message.author.username}`, `${message.author.avatarURL}`)
  
  message.channel.send(pollEmbed)
    .then(message => {
      message.react('👍')
      message.react('👎')
    })
    .catch(() => console.error('Failed to react.'));
}

module.exports.help = {
    name: "poll"
}