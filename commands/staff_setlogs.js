let Discord = require("discord.js")
let fs = require("fs")

module.exports.run = async (client, message, guild, member) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.react("❌"); 
    if(!message.mentions.channels.first()) return message.reply("Merci de mentionné le salon")
  
    let log_channel = JSON.parse(fs.readFileSync("../log_channel.json", "utf8"))
    log_channel[message.guild.id] = {
        salon: message.mentions.channels.first().id
    }
    fs.writeFile("../log_channel.json", JSON.stringify(log_channel), (err) => {
        if (err) console.log(err)
      });

    message.channel.send("`Le salon des logs a été définie =>` <#" + log_channel[message.guild.id].salon + ">")
}

module.exports.help = {
    name: "setlogs"
}