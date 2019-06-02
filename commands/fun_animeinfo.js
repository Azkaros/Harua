const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports.run = async (client, message, args) => {
  if (args.length === 0) return message.reply(':x: h!animeinfo <Nom d\'un animé>')

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setDescription(`Les résultats My Anime List pour ${data.englishTitle}`.split(',').join(' '))
      .setAuthor('MyAnimeList','https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png','https://myanimelist.net/')
      .setThumbnail(data.picture)
      .setColor('#ffcccc')
      .addField('• Titre anglais', data.englishTitle, true)
      .addField('• Titre japonais', data.japaneseTitle, true)
      .addField('• Synopsis', data.synopsis, true)
      .addField('• Type', data.type, true)
      .addField('• Episodes', data.episodes, true)
      .addField('• Sortie', data.aired, true)
      .addField('• Score', data.score, true)
      .addField('• Nombre de vote', data.scoreStats, true)
      .addField('• Studio', data.studios, true)
      .addField('• Genre', data.genres, true)
      .addField('• Lien', data.url)
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
      .setTimestamp();

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));




}

module.exports.help = {
  name: "animeinfo"
}