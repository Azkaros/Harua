const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
	
	let {body} = await superagent
	.get('http://api.cutegirls.moe/json')
	  
	  let cEmbed = new Discord.RichEmbed()
	  .setColor("#6389EF")
	  .setAuthor(`Une magnifique image aléatoire d'anime`)
	  .setImage(body.data.image)
	  .setTimestamp()
	  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
	  
	  message.channel.send({embed: cEmbed})

}

module.exports.help = {
    name: "anime"
}
