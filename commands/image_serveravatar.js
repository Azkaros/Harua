const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let aEmbed = new Discord.RichEmbed()
    .setColor("#6389EF")
    .setAuthor(`Voici l'avatar du serveur ${message.guild.name}`)
    .setImage(message.guild.iconURL)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    
    message.channel.send({embed: aEmbed})
return;
};

module.exports.help = {
    name: "serveravatar"
}
