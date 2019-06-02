const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {	
	let {body} = await superagent
	.get('https://nekos.life/api/v2/img/lizard')

	  
	  let cEmbed = new Discord.RichEmbed()
	  .setColor("#6389EF")
	  .setDescription(`Waw, elle est sympa cette photo de lézard`)
	  .setAuthor(body.url)
	  .setTimestamp()
	  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
	  
	  message.channel.send({embed: cEmbed})
}

module.exports.help = {
    name: "lizard"
}