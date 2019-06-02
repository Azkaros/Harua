const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.react('🏓')
}

module.exports.help = {
    name: "ping"
}