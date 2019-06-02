const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {	
	let {body} = await superagent
	.get('https://api-to.get-a.life/pikachuimg')
	  
	  let cEmbed = new Discord.RichEmbed()
	  .setColor("#6389EF")
	  .setAuthor(`Une magnifique image de Pikachu !`)
	  .setImage(body.link)
	  .setTimestamp()
	  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
	  
	  message.channel.send({embed: cEmbed})
}

module.exports.help = {
    name: "pika"
}
