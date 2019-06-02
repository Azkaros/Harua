const Discord = require("discord.js");

const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")

module.exports.run = async (client, message, args) => {

    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
        return console.log(err);
      }


    let day = client.user.createdAt.getDate()
    let month = 1 + client.user.createdAt.getMonth()
    let year = client.user.createdAt.getFullYear()
    let bicon = client.user.displayAvatarURL;

    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let botembed = new Discord.RichEmbed()
    .setAuthor("Information du bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    .addField("• Nom:", client.user.username)
    .addField("• Crée le:", `${day}.${month}.${year}`)
    .addField("• Serveurs:", client.guilds.size)
    .addField("• Utilisateurs:", `${client.users.size.toLocaleString()}`, true)
    .addField("• Salons:", `${client.channels.size.toLocaleString()}`, true)
    .addField("• Créateur:", `<@226657385211494401>`,true)
    .addField("• CPU:", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    .addField("• Utilisation du CPU:", `\`${percent.toFixed(2)}%\``,true)
    .addField("• Utilisation de la mémoire:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("• Uptime:", `${duration}`, true)
    .addField("• Discord.js:", `v${version}`, true)
    .addField("• Node:", `${process.version}`, true)  
    .addField("• Serveur de support:", "https://discord.gg/PeRjhJa");	  

    return message.channel.send(botembed);
});
}

module.exports.help = {
    name: "botinfo"
}