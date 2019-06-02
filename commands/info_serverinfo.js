const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let mday = message.member.joinedAt.getDate()
    let mmonth = 1 + message.member.joinedAt.getMonth()
    let myear = message.member.joinedAt.getFullYear()
    let sEmbed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    .setAuthor(`Info sur le serveur ${message.guild.name}`)
    .addField("• Nom du serveur:", `${message.guild.name}`,true)
    .addField("• Nom de l'owner:", `${message.guild.owner}`,true)
    .addField("• Nombre de membres:", `${message.guild.memberCount}`,true)
    .addField("• Nombre d'humains:", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
    .addField("• Nombre de bots:", message.guild.members.filter(m => m.user.bot).size, true)
    .addField("• En ligne:", online.size, true)
    .addField("• Nombre de rôles:", `${message.guild.roles.size}`,true)
    .addField("• Nombre de channels:", message.guild.channels.size, true)
    .addField("• Nombre d'émojis:", message.guild.emojis.size, true)
    .addField("• Crée le:", `${day}.${month}.${year}`,true)
    .addField("• Rejoins le:", `${mday}.${mmonth}.${myear}`,true)
    .addField("• Région:", message.guild.region, true)
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    message.channel.send({embed: sEmbed});
}

module.exports.help = {
    name: "serverinfo"
}
