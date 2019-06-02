const Discord = require("discord.js");
const moment = require("moment");
moment.locale('fr');
moment().format();
module.exports.run = async (client, message, args) => {
    let date_moment = moment(message.createdAt)
    let heur = message.createdAt.getHours();
    let minute = message.createdAt.getMinutes();
    let serverembed = new Discord.RichEmbed()
        .setColor("#ffcccc")
        .setDescription("------------------------------------------------")
        .addField(`Nous somme le ${date_moment.format('DD MMMM YYYY')}`, `------------------------------------------------`, true)
        .addField(`Il est ${heur}` + ":" + minute, `------------------------------------------------`)
        .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
        .setTimestamp()
    message.channel.send(serverembed);
}

module.exports.help = {
    name: "date"
}