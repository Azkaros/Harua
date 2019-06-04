const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    superagent.get('https://neko-love.xyz/api/v1/neko')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setAuthor(`Random Neko Image`)
      .setImage(response.body.url)
      .setColor(`#6389EF`)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
    message.delete().catch(O_o=>{}); 
}
    module.exports.help = {
        name: "neko"
    }
    