const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
exports.run = (client, message, args) => {

    if (!message.channel.nsfw) return message.reply(":x: Vous pouvez seulement utiliser cette commande dans un channel NSFW !");

    var subreddits = [
        'BlacksOnAsians',
        'japanpornstars',
        'AsianCuties',
        'realasians'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(`#ff5733`)
                .setAuthor(`**Random Asian Image**`)
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
  name:"asian"
}