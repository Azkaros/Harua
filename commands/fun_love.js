const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) => {

    if (!message.mentions.users.first()){return message.channel.send(":x: h!love <Personne mentionnée>");}
    if (message.mentions.users.first() === message.author){return message.channel.send(":x: PAUV MEC !")}
    if (message.mentions.users.first() === client.user){return message.channel.send(":x: Laisse moi tranquille nan mais oh !")}

    let love = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTimestamp()
        .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
        .setTitle(`:hearts: Je pense que ${message.author.username} et ${message.mentions.users.first().username} sont amoureux à ${love}% :hearts:`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "love"
};