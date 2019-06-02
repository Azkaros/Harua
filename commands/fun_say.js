const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (args.length === 0) return message.reply(':x: h!say <Texte à faire dire au bot>') 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}

module.exports.help = {
    name: "say"
}