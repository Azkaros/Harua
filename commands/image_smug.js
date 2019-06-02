const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    superagent.get('https://nekos.life/api/v2/img/smug')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`0x6389EF`)
      .setAuthor(`Hihi, tu te la pête toi...`)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
}
    module.exports.help = {
        name: "smug"
    }
    