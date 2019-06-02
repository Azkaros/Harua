const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let inviteembed = new Discord.RichEmbed()
    .setAuthor("Invitation pour le bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    .addField("Voici un lien pour inviter le bot sur votre serveur","https://discordapp.com/api/oauth2/authorize?client_id=504366548899594271&permissions=8&scope=bot");
	
   return message.channel.send(inviteembed);
}

module.exports.help = {
    name: "invite"
}