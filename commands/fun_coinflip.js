const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const rolled = Math.floor(Math.random() * 2) + 1;
  let headembed = new Discord.RichEmbed()
  .setDescription(`**Coin Flip**`)
  .addField(`Resultat`, `C'est **FACE**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0xff1053")
  .setTimestamp()
  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
  let tailembed = new Discord.RichEmbed()
  .setDescription(`**Coin Flip**`)
  .addField(`Resultat`, `C'est **PILE**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0x00bee8")
  .setTimestamp()
  .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
}

module.exports.help = {
  name: "coinflip"
}