const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();

module.exports = async (client) => {
  fs.readdir('./commands/', (err, files) =>{  
    let jsFile = files.filter(f => f.split('.').pop() === 'js')
  
  fs.readdir('./évents/', (err, files) =>{  
    let jsFiles = files.filter(f => f.split('.').pop() === 'js') 
    
    console.log(`${client.user.username} has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds - With ${jsFile.length} Commands and ${jsFiles.length} Event✔`);
  client.guilds.map((guild) => console.log(`Name: ${guild.name} (ID: ${guild.id}) ✔`)); 
  client.user.setPresence({ game: { name: `h!help | aide ${client.guilds.size} serveurs !` }, status: 'online' });
  client.user.setGame(`h!help | aide ${client.guilds.size} serveurs !`, 'https://www.twitch.tv/nagitoyourgoodboy');
  const channel = client.channels.find('name', "【🌸】launch-bot-alert")
  let bicon = client.user.displayAvatarURL; 

  const embed = new Discord.RichEmbed()
    .setColor("#895678")
    .setImage(bicon)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    .setDescription("New Launch")
    .addField(`${client.user.username} has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.\nWith ${jsFile.length} Commands and ${jsFiles.length} Event  ✔`,"Support Server: https://discord.gg/PeRjhJa\nUse ``h!help`` ");
    channel.send(embed);
})
})
}
