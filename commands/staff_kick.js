const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply(":x: h!kick <PERSONNE RAISON>");
    const mod = message.author;
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Utilisateur inconnue.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission d'executer cette commande.");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.reply("Vous ne pouvez pas kick cette personne.");

    let kickEmbed = new Discord.RichEmbed()
    .setAuthor("Kick")
    .setColor("#000000")
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    .setTimestamp()
    .addField("• Utilisateur", `<@${kUser.id}>`)
    .addField("• Raison", kReason)
    .addField("• Modérateur", `${mod}`);


    message.guild.member(kUser).kick(kReason);
    message.channel.send({embed: kickEmbed});
	  
    return;
}

module.exports.help = {
    name: "kick"
}