const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) => {

    var user = message.mentions.users.first() || message.author;

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTimestamp()
        .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
        .setAuthor(`:gay_pride_flag: Je pense que ${user.username} est gay à ${gay}% :gay_pride_flag:`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};