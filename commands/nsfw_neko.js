const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.reply(':x: Vous pouvez seulement utiliser cette commande dans un channel NSFW !')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setAuthor(`Random Neko Image`)
      .setImage(response.body.url)
      .setColor(`#ff5733`)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
    message.delete().catch(O_o=>{}); 
}
    module.exports.help = {
        name: "neko"
    }
    