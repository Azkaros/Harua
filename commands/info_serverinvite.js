const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let sinviteembed = new Discord.RichEmbed()
    .setAuthor("Invitation pour le serveur de support")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    .addField("Voici le lien pour rejoindre mon serveur","https://discord.gg/PeRjhJa");
	
   return message.channel.send(sinviteembed);
}

module.exports.help = {
    name: "serverinvite"
}