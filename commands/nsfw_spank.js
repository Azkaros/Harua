const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.reply(':x: Vous pouvez seulement utiliser cette commande dans un channel NSFW !')
    if (args.length === 0) return message.reply(':x: h!anal <Personne mentionée>')

    superagent.get('https://nekos.life/api/v2/img/spank')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setColor(`#ff5733`)
      .setAuthor(`${message.author.username} vient de donner une féssée à ${message.mentions.members.first().user.username} :scream: !`)
      .setImage(response.body.url)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
    message.delete().catch(O_o=>{}); 
}

module.exports.help = {
    name: "spank"
}