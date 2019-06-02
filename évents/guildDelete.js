const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();

module.exports = async (client, guild) => {
    console.log(`J'ai quitté: ${guild.name} (id: ${guild.id}). Il avait ${guild.memberCount} membres!`);
    client.user.setPresence({ game: { name: `h!help | ${client.guilds.size} | ${client.users.size}` }, status: 'online' });
    client.user.setGame(`h!help | aide ${client.guilds.size} serveurs !`, 'https://www.twitch.tv/nagitoyourgoodboy');
}