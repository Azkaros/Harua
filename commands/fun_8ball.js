const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply(":x: h!8ball <Posez votre question ici>"); 
    let question = args.slice().join(" ");
    let color = ""
    let replies = ['Oui', 'Non', 'Repose la question plus tard'];
    let result = Math.floor((Math.random() * replies.length));

    if (replies[result] === 'Oui') color = "#00FF00";
    if (replies[result] === 'Non') color = "#FF0000";
    if (replies[result] === 'Repose la question plus tard') color = "#0000FF";

    let newembed = new Discord.RichEmbed()
        .setAuthor(question)
        .setColor(color)
        .setTimestamp()
        .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
        .setDescription(`**Posé par: ${message.author}\nResultat: ${replies[result]}**`);

    message.delete().catch(O_o => {});
    message.channel.send({
        embed: newembed
    })
};

module.exports.help = {
    name: "8ball"
}

