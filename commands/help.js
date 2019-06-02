const Discord = require("discord.js")
const fs = require('fs');
const client = new Discord.Client();

exports.run = (client, message, args) => {
fs.readdir('./commands/', (err, files) =>{  
    let jsFile = files.filter(f => f.split('.').pop() === 'js')
    let bicon = client.user.displayAvatarURL;

    let embed = new Discord.RichEmbed()
    let embed_1 = new Discord.RichEmbed()
    let embed_2 = new Discord.RichEmbed()
    let embed_3 = new Discord.RichEmbed()
	
    embed
        .setColor("#972e34")
        .setThumbnail(bicon)
        .setTimestamp()
        .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
        .setAuthor('Commandes:')
        .setDescription(`${jsFile.length} Commandes`)
        .addField("• Commandes fun 🤖","Toutes les commandes fun et utiles présentent avec le bot")
        .addField("• Commandes images 💎","Toutes les commandes d'images présentent avec le bot")
        .addField("• Commandes NSFW 🔞","Toutes les commandes NSFW présentent avec le bot")
        .addField("• Commandes d'info 💡","``serverinfo`` - ``userinfo`` - ``botinfo`` - ``invite`` - ``serverinvite``")
        .addField("• Commandes de staff 🔧","``ban`` - ``kick`` - ``clear`` - ``mute`` - ``unmute`` - ``lock`` - ``unlock``")
    

    embed_1 
    .setColor("#972e34")
    .setThumbnail(bicon)
    .setTimestamp()
    .setAuthor('Commandes utiles et fun:')
    .setDescription('Toutes les commandes utiles et fun ``h!``')
    .addField('• Commandes utiles',"``ping`` - ``poll`` - ``meteo`` - ``date``")
    .addField('• Commandes Fun', "``say`` - ``coinflip`` - ``8ball`` - ``animeinfo`` - ``gay`` - ``emojify`` - ``ascii`` - ``flip`` - ``démineur`` - ``spotify`` - ``slots`` - ``love``")
    .addField('• Commandes de stats (pour les jeux)',"``csgo`` - ``osu`` - ``fortnite``")
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)

    embed_2
    .setColor("#972e34")
    .setThumbnail(bicon)
    .setTimestamp()
    .setAuthor('Commandes pour les images:')
    .setDescription('Toutes les commandes pour les images ``h!``')
    .addField('• Commandes de génération',"``cat`` - ``dog`` - ``meme`` - ``pika`` - ``jul`` - ``anime`` - ``smug`` - ``lizard`` - ``wallpaper``")
    .addField('• Commandes intéractive (mention obliatoire)',"``kiss`` - ``hug`` - ``baka``- ``slap`` - ``cuddle`` - ``tickle`` - ``pat`` - ``feed``")
    .addField('• Commandes pour votre avatar',"``avatar`` - ``serveravatar`` - ``random_avatar`` - ``whatspokemon`` - ``captcha`` - ``beautiful`` - ``treasure`` - ``bobross`` - ``blur`` - ``prison`` - ``phvideo``")
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)

    embed_3
    .setColor("#972e34")
    .setThumbnail(bicon)
    .setTimestamp()
    .setAuthor('Commandes pour les images NSFW:')
    .setDescription('Toutes les commandes pour les images NSFW ``h!``')
    .addField('• Commandes NSFW 2D',"``neko`` - ``boobs`` - ``pussy`` - ``hentai`` - ``kuni`` - ``trap`` - ``yuri`` - ``feet`` - ``random_avatar_nsfw``")
    .addField('• Commandes NSFW 3D',"``milf`` - ``realgirl`` - ``asian`` - ``booby`` - ``4k``")
    .addField('• Commandes intéractive (mention obligatoire)',"``fuck`` - ``blowjob`` - ``spank`` - ``anal``")
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)


    const filter = (reaction, user) => {
        if (user.id === client.user.id) return;
        return ["🤖"].includes(reaction.emoji.name) && message.author.id; // Vous pouvez le rajouté pour que ce sois que celui qui lance la commande qui puissent modifié le message
    }
    const filter1 = (reaction, user) => {
        if (user.id === client.user.id) return;
        return ["💎"].includes(reaction.emoji.name) && message.author.id;
    }
    const filter2 = (reaction, user) => {
        if (user.id === client.user.id) return;
        return ["🔞"].includes(reaction.emoji.name) && message.author.id;
    }
    const filter3 = (reaction, user) => {
        if (user.id === client.user.id) return;
        return ["🔁"].includes(reaction.emoji.name) && message.author.id;
    }


    message.channel.send(embed)
    .then((msg) => {

        restart() // lancé la fonction restart
        function restart() { // la fonction restart

        msg.edit(embed) // ce n'est pas vraiment nécéssaire de remodifié le message sur le même message mais c'est histoire de lancé le truc
        .then(() => msg.clearReactions()) // on enlève toute les reactions pour les remettre
        .then(() => msg.react("🤖"))
        .then(() => msg.react("💎"))
        .then(() => msg.react("🔞"))
        .then(() => msg.react("🔁"))
        // on attend toute les reactions

        msg.awaitReactions(filter, { max: 1, maxUsers: 1, time: 60000 * 30, errors: ['time'] }) // on attends la reaction qui est dans le filtre
        .then(collected => {
            const reaction = collected.first(); // on collecte 

            if (reaction.emoji.name === '🤖') { // si la reaction est 🤖 donc on modifie le message
                msg.edit(embed_1)
            }

        })
        .catch(async collected => {
            msg.delete(5000).catch(err => { }) // si le temp d'attente est dépassé on supprime le message
        })

        msg.awaitReactions(filter1, { max: 1, maxUsers: 1, time: 60000 * 30, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '💎') {
                msg.edit(embed_2)
            }

        })
        .catch(async collected => {
            msg.delete(5000).catch(err => { })
        })

        msg.awaitReactions(filter2, { max: 1, maxUsers: 1, time: 60000 * 30, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '🔞') {
                msg.edit(embed_3)
            }

        })
        .catch(async collected => {
            msg.delete(5000).catch(err => { })
        })

        msg.awaitReactions(filter3, { max: 1, maxUsers: 1, time: 60000 * 30, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '🔁') {
                restart() // lance la fonction restart du coup tout recommence
            }

        })
        .catch(async collected => {
            msg.delete(5000).catch(err => { })
        })

    }
  })
})
}

module.exports.help = {
    name: "help",
    aliases: ["h","command","commands"]
 }