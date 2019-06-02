const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply(":x: h!mute <PERSONNE RAISON>");
    if (!message.member.hasPermission ('KICK_MEMBERS')) return message.reply("Vous n'avez pas la permission d'executer cette commande.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Utilisateur inconnue.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.reply('Merci de donner une raison')
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

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor('Mute')
            .addField('• Utilisateur', `<@${user.id}>`)
            .addField('• Raison', `${reason}`)
            .addField('• Modérateur', `${mod}`)
            .setTimestamp()
            .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
        message.channel.send(muteembed)
  
  
}

module.exports.help = {
    name: "mute",
    category: "MODERATION",
}