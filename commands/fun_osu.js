const Discord = require("discord.js");
const osu = require('node-osu');
const osuAPI = require('osuapi-js');
const api = new osu.Api("ac4f21bd1f3c67968946899f644e1361b7b0ef26" , {
    notFoundAsError: true,
    completeScores: false 
});

module.exports.run = async (client, message, args) => {
    let username = args[0]
    if (args.length === 0) return message.reply(':x: h!osu <Pseudo Ingame>') 
    
  api.getUser({u: username}).then(user => {
    const osuembed = new Discord.RichEmbed()
    .setAuthor('Profil Osu! de ' + user.name)
    .setDescription('Demandé par' + message.author.tag, message.author.avatarURL)
    .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
    .setColor("#ffcccc")
    .addField('• Pseudo', user.name, true)
    .addField('• PP', Math.round(user.pp.raw), true)
    .addField('• Classement', user.pp.rank, true)
    .addField('• Niveaux', Math.round(user.level), true)
    .addField('• Pays', user.country, true)
    .addField('• Classement par pays', user.pp.countryRank, true)
    .addField('• Nombre de parties', user.counts.plays, true)
    .addField('• Accuracy', `${user.accuracyFormatted}`, true)
    .setTimestamp()
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
    message.channel.send(osuembed)
    
  })
  
}

module.exports.help = {
    name: "osu"
}