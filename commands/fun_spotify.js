const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;
            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify info')
                .setColor("#ffcccc")
                .setTimestamp()
                .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
                .setThumbnail(trackImg)
                .setDescription(`
\`🎵\` **Nom du son :**  \`${trackName}\`
\`📀\` **Album :**  \`${trackAlbum}\`
\`🎤\` **Auteur(s) :**  \`${trackAuthor}\`
`)
                .addField('Écoutez ce titre :', `[${trackUrl}](${trackUrl})`, false);
            return message.channel.send(embed);
        } catch (error) {
            return message.channel.send(`${user.username} n'écoute peut être pas un son enregistré`);
        }
    } else {
        return message.channel.send(`${user.username} n'est pas sur spotify`);
    }
}; 

module.exports.help = {
    name: "spotify"
}
