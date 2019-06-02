const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    superagent.get('https://nekos.life/api/v2/img/avatar')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`#6389EF`)
      .setDescription(`Un avatar au hasard rien que pour toi :p`)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
}
    module.exports.help = {
        name: "random_avatar"
    }
    