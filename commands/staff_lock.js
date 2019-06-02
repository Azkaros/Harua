const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.reply("Vous n\'avez pas la permission d'executer cette commande.")
  
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
    message.delete().catch(O_o=>{});
    let enligne = new Discord.RichEmbed()
    .addField(`🔓 Salon verrouillé`,`**Le salon a été verrouillé par ${message.author}**`)
    .setTimestamp()
    .setColor("#000000")
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
    
    message.channel.send(enligne)
}

module.exports.help = {
    name: "lock"
}
