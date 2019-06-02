const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {

    superagent.get('https://nekos.life/api/v2/img/wallpaper')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setColor(`#6389EF`)
      .setAuthor(`Voici un magnifique wallpaper !`)
      .setImage(response.body.url)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
}

module.exports.help = {
    name: "wallpaper"
}
