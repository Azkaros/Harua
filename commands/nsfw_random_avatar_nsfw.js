const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.reply(':x: Vous pouvez seulement utiliser cette commande dans un channel NSFW !')
    superagent.get('https://nekos.life/api/v2/img/nsfw_avatar')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`#ff5733`)
      .setAuthor(`Random Anime NSFW Avatar`)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
    message.delete().catch(O_o=>{}); 
}
    module.exports.help = {
        name: "random_avatar_nsfw"
    }
    