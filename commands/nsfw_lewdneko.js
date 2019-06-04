const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.reply(':x: Vous pouvez seulement utiliser cette commande dans un channel NSFW !')
    superagent.get('https://neko-love.xyz/api/v1/nekolewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setAuthor(`Random Lewdneko Image`)
      .setImage(response.body.url)
      .setColor(`#ff5733`)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
    message.delete().catch(O_o=>{}); 
}
    module.exports.help = {
        name: "lewdneko"
    }
    