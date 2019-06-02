const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {

    if (args.length === 0) return message.reply(':x: h!pat <Personne mentionée>')
    if (message.mentions.users.first() === message.author){return message.channel.send(":x: PAUV MEC !")}
    if (message.mentions.users.first() === client.user){return message.channel.send(":x: Laisse moi tranquille nan mais oh !")} 

    superagent.get('https://nekos.life/api/v2/img/pat')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setColor(`#6389EF`)
      .setAuthor(`${message.author.username} a tapotté ${message.mentions.members.first().user.username} !`)
      .setImage(response.body.url)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
}

module.exports.help = {
    name: "pat"
}
