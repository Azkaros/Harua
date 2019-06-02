const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();

module.exports = async (client, guild) => {
    console.log(`Nouveau serveur rejoint: ${guild.name} (id: ${guild.id}). Il a ${guild.memberCount} membres!`);
    client.user.setPresence({ game: { name: `h!help | ${client.guilds.size} | ${client.users.size}` }, status: 'online' });
    client.user.setGame(`h!help | aide ${client.guilds.size} serveurs !`, 'https://www.twitch.tv/nagitoyourgoodboy');
}