const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
exports.run = (client, message, args) => {

    if (!message.channel.nsfw) return message.reply(':x: Vous pouvez seulement utiliser cette commande dans un channel NSFW !')

    var subreddits = [
        'milf',
        'amateur_milfs',
        'HotMoms',
        'WouldYouFuckMyWife'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(`#ff5733`)
                .setAuthor(`Random Milf Image`)
                .setTimestamp()
                .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
                .setImage(url);
            message.channel.send({
                embed
            });
        })

        message.delete().catch(O_o=>{}); 
}
module.exports.help = {
  name:"milf"
}