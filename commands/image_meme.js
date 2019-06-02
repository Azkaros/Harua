const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

	let {body} = await superagent
	.get('https://api-to.get-a.life/meme')

	  
	  let cEmbed = new Discord.RichEmbed()
	  .setColor("#6389EF")
	  .setAuthor(`C'est un même quoi ...`)
	  .setImage(body.url)
	  .setTimestamp()
	  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
	  
	  message.channel.send({embed: cEmbed})

}

module.exports.help = {
    name: "meme"
}
