const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

	
	let {body} = await superagent
	.get('https://dog.ceo/api/breeds/image/random')
	  let cEmbed = new Discord.RichEmbed()
	  .setColor("#6389EF")
	  .setAuthor(`Une magnifique image de chien trop mignon :3 !`)
	  .setImage(body.message)
	  .setTimestamp()
	  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
	  
	  message.channel.send({embed: cEmbed})
}

module.exports.help = {
    name: "dog"
}