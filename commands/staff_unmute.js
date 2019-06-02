const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.reply("Vous n'avez pas la permission d'executer cette commande.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Utilisateur inconnue.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Muted")) return message.reply('Cette utilisateur n\'est pas mute')
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor("Unmute")
            .setColor("#000000")
            .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
            .setTimestamp()
            .addField('• User', `<@${user.id}>`)
            .addField('• Moderator', `${mod}`)
            .setColor('#000000');
        message.channel.send(muteembed)
  
  
}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "unmute"
}