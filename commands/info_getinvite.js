const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (message.author.id !== "226657385211494401") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Entre un id valide de serveur`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
module.exports.help = {
    name: "getinvite"
}