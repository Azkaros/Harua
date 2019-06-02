const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply(":x: h!ban <PERSONNE RAISON>");
    const mod = message.author;
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Utilisateur inconnue.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Vous n'avez pas la permission d'executer cette commande.");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.reply("Vous ne pouvez pas ban cette personne.");

    let banEmbed = new Discord.RichEmbed()
    .setAuthor("Ban")
    .setColor("#000000")
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    .setTimestamp()
    .addField("• Utilisateur", `<@${bUser.id}>`)
    .addField("• Raison", bReason)
    .addField("• Modérateur", `${mod}`);

    message.guild.member(bUser).ban(bReason);
    message.channel.send({embed: banEmbed})


    return;
}

module.exports.help = {
    name: "ban"
}