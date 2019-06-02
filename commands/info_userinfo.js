const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let mday = message.member.joinedAt.getDate()
    let mmonth = 1 + message.member.joinedAt.getMonth()
    let myear = message.member.joinedAt.getFullYear()
    let member = message.mentions.users.first() || message.author;
    let userembed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setThumbnail(member.displayAvatarURL)
        .setAuthor(`Les infos utilisateurs de ${member.username}`)
        .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
        .setTimestamp()
        .addField("• Nom:", member.username, true)
        .addField("• Id:", member.id, true)
        .addField("• Jeu:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Ne joue pas", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("• Surnom:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "Non", true )
        .addField("• Rejoins le:", `${mday}.${mmonth}.${myear}`,true)
        .addField("• Dernier message:", member.lastMessage, true)
        .addField("• Roles:", message.guild.member(member).roles.map(s => s).join(" | "), true)

        message.channel.send(userembed);
}

module.exports.help = {
    name: "userinfo"
}