const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.reply(':x: Vous pouvez seulement utiliser cette commande dans un channel NSFW !')
    if (args.length === 0) return message.reply(':x: h!blowjob <Personne mentionée>')

    if (!message.channel.nsfw) return message.channel.send('Vous pouvez seulement utiliser cette commande dans un channel NSFW !')
    superagent.get('https://nekos.life/api/v2/img/bj')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setColor(`#ff5733`)
      .setAuthor(`${message.author.username} suce ${message.mentions.members.first().user.username} !`)
      .setImage(response.body.url)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
    message.delete().catch(O_o=>{}); 
}

module.exports.help = {
    name: "blowjob"
}
