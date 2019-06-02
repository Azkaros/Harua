const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;
    let aEmbed = new Discord.RichEmbed()
    .setColor("#6389EF")
    .setAuthor(`Voici l'avatar de ${member.username}`)
    .setImage(member.avatarURL)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    
    message.channel.send({embed: aEmbed})
return;
};

module.exports.help = {
    name: "avatar"
}
