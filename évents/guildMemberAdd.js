const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = async (client, member, guild) => {
    //            LE CODE
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM") // les couleur seront au hasard
  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)// le nom et l'icon du serveur
  .setTitle(`${member.user.username} a rejoint et trouves Rui magnifique :white_check_mark:`) // le nom d'utilisateur et une description
  .setThumbnail(member.user.displayAvatarURL)// L'image de profile 
  .setImage("https://i.imgur.com/Ziqgkut.jpg")
  .setTimestamp() // affichier l'heure
let channel =  guild.channel.find(x => x.name === "🚩-arrivants") // exemple ("557304096042269825") ou par nom .channels.find(x => x.name === "le nom du salon")
if (!channel) return;
    channel.send(embed)// envoyé le message embed dans le salon que vous avez choissit
}
