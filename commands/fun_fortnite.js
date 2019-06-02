const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ftnApi = new Fortnite("8759ac19-5d0a-4fba-a83a-a546d7fa0c5b");
//Above, you need to get your api key. Register and generate a TRN-Api-Key at https://fortnitetracker.com/site-api
const currentSeason = "9";


//The current commands are
// <prefix> <epic-username> [platform pc/psn/xbl]  (ex /fortnite Dark pc)
// <prefix> <epic-username> [platform pc/psn/xbl] {mode all/season}  (ex /fortnite Dark pc all)
// <prefix> drop
// For lifetime stats use: <prefix> <epic-username> (ex /fortnite Dark)


module.exports.run = async (bot, message, args) => {
    //Fortnite drop command
    if (args[0] == "drop") {
        let places = [
            "Lazy Links",
            "Dusty Divot",
            "Fatal Fields",
            "Flush Factory",
            "Greasy Grove",
            "Haunted Hills",
            "Junk Junction",
            "Lonely Lodge",
            "Loot Lake",
            "Lucky Landing",
            "Paradise Palms",
            "Pleasant Park",
            "Retail Row",
            "Risky Reels",
            "Salty Springs",
            "Shifty Shafts",
            "Snobby Shores",
            "Tilted Towers",
            "Tomato Town",
            "Wailing Woods"
        ];

        let picker = Math.floor(Math.random() * places.length); //Randomely picks a spot

        return message.channel.send(places[picker]); //Sends randomely picked spot
    }
    
    //Fortnite stats
    let username = args[0]; //Gets username
    let platform = args[1] || "pc"; //Gets platform, default: pc
    let mode = "life"; //Default stats: lifetime

    if (args[2]) {
        if (args[2].toLowerCase() == "all" || args[2].toLowerCase() == "season") {
            mode = args[2]; //Gets stats type, all or season stats
        } else {
            return message.reply(
                ":x: h!fortnite <epic-username> [plateforme: pc/xbl/psn] {mode all/solo/season}"
            ); //Sends error message
        }
    }

    if (!username)
        //No username specified?
        return message.reply(
            ":x: h!fortnite <epic-username> [plateforme: pc/xbl/psn] {mode all/solo/season}"
        );  //Sends error message

    let data = ftnApi
        .user(username, platform)
        .then(data => {
            let stats = data.stats; //Raw stats
            if (mode == "life") {
                let lifetime = stats.lifetime; //Lifetime stats
                let lifeScore = lifetime[6]["Score"];
                let lifeMatches = lifetime[7]["Matches Joués"];
                let lifeWins = lifetime[8]["Wins"];
                let lifeWinPercent = lifetime[9]["Win%"];
                let lifeKills = lifetime[10]["Kills"];
                let lifeKd = lifetime[11]["K/d"];

                let lifeEmbed = new Discord.RichEmbed()
                    .setTitle("Fortine statistiques à vie")
                    .setThumbnail(
                        "https://blog.lifetime.com/imagecache/Blog/Generic%20Lifetime%20Banner%20Blog.png"
                    )
                    .setDescription(`Statistiques à vie pour ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", lifeWins, true)
                    .addField("Kills", lifeKills, true)
                    .addField("K/D", lifeKd, true)
                    .addField("Matches Joués", lifeMatches, true)
                    .addField("Score", lifeScore, true)
                    .addField("Pourcentages Win", lifeWinPercent, true)

                message.channel.send(lifeEmbed); //Sends lifetime stats
            }

            if (mode.toLowerCase() == "all") {
                //Solo stats
                let solo = stats.solo;
                let soloScore = solo.score;
                let soloMatches = solo.matches;
                let soloWins = solo.wins;
                let soloKills = solo.kills;
                let soloKd = solo.kd;

                let soloEmbed = new Discord.RichEmbed()
                    .setTitle("Statistiques fortnite en **solo**")
                    .setThumbnail("https://image.noelshack.com/fichiers/2019/19/5/1557509075-solo.png")
                    .setDescription(`Statistiques en solo pour ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", soloWins, true)
                    .addField("Kills", soloKills, true)
                    .addField("K/D", soloKd, true)
                    .addField("Matches Joués", soloMatches, true)
                    .addField("Score", soloScore, true)
                message.channel.send(soloEmbed); //Send solo stats

                //Duo stats
                let duo = stats.duo;
                let duoScore = duo.score;
                let duoMatches = duo.matches;
                let duoWins = duo.wins;
                let duoKills = duo.kills;
                let duoKd = duo.kd;

                let duoEmbed = new Discord.RichEmbed()
                    .setTitle("Statistiques Fortnite en **duo**")
                    .setThumbnail(
                        "https://image.noelshack.com/fichiers/2019/19/5/1557509075-duo.png"
                    )
                    .setDescription(`Statistiques en duo pour ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", duoWins, true)
                    .addField("Kills", duoKills, true)
                    .addField("K/D", duoKd, true)
                    .addField("Matches Joués", duoMatches, true)
                    .addField("Score", duoScore, true)
                message.channel.send(duoEmbed); //Send duo stats

                //Squad stats
                let squad = stats.squad;
                let squadScore = squad.score;
                let squadMatches = squad.matches;
                let squadWins = squad.wins;
                let squadKills = squad.kills;
                let squadKd = squad.kd;

                let squadEmbed = new Discord.RichEmbed()
                    .setTitle("Statistiques Fortnite en **squad**")
                    .setThumbnail(
                        "https://image.noelshack.com/fichiers/2019/19/5/1557509075-squad.png"
                    )
                    .setDescription(`Statistiques en squad pour ${data.username}`)
                    .setColor("#42b6f4")
                    .addField("Wins", squadWins, true)
                    .addField("Kills", squadKills, true)
                    .addField("K/D", squadKd, true)
                    .addField("Matches Joués", squadMatches, true)
                    .addField("Score", squadScore, true)
                message.channel.send(squadEmbed); //Send squad stats
            }

            if (mode.toLowerCase() == "season") {
                //Solo season stats
                let currentSolo = stats.current_solo;
                let currentSoloScore = currentSolo.score;
                let currentSoloMatches = currentSolo.matches;
                let currentSoloWins = currentSolo.wins;
                let currentSoloKills = currentSolo.kills;
                let currentSoloKd = currentSolo.kd;

                let currentSoloEmbed = new Discord.RichEmbed()
                    .setTitle(`Statistiques fortnite en **solo** saison ${currentSeason}`)
                    .setThumbnail("https://image.noelshack.com/fichiers/2019/19/5/1557509075-solo.png")
                    .setDescription(
                        `Statistiques fortnite en solo pour la saison ${currentSeason} de ${data.username}`
                    )
                    .setColor("#42b6f4")
                    .addField("Wins", currentSoloWins, true)
                    .addField("Kills", currentSoloKills, true)
                    .addField("K/D", currentSoloKd, true)
                    .addField("Matches Joués", currentSoloMatches, true)
                    .addField("Score", currentSoloScore, true)
                message.channel.send(currentSoloEmbed); //Send solo season stats

                //Duo season stats
                let currentDuo = stats.current_duo;
                let currentDuoScore = currentDuo.score;
                let currentDuoMatches = currentDuo.matches;
                let currentDuoWins = currentDuo.wins;
                let currentDuoKills = currentDuo.kills;
                let currentDuoKd = currentDuo.kd;

                let currentDuoEmbed = new Discord.RichEmbed()
                    .setTitle(`Statistiques fortnite en **duo** saison ${currentSeason}`)
                    .setThumbnail(
                        "https://image.noelshack.com/fichiers/2019/19/5/1557509075-duo.png"
                    )
                    .setDescription(
                        `Statistiques fortnite en duo pour la saison ${currentSeason} de ${data.username}`
                    )
                    .setColor("#42b6f4")
                    .addField("Wins", currentDuoWins, true)
                    .addField("Kills", currentDuoKills, true)
                    .addField("K/D", currentDuoKd, true)
                    .addField("Matches Joués", currentDuoMatches, true)
                    .addField("Score", currentDuoScore, true)
                message.channel.send(currentDuoEmbed); //Send duo season stats

                //Squad season stats
                let currentSquad = stats.current_duo;
                let currentSquadScore = currentSquad.score;
                let currentSquadMatches = currentSquad.matches;
                let currentSquadWins = currentSquad.wins;
                let currentSquadKills = currentSquad.kills;
                let currentSquadKd = currentSquad.kd;

                let currentSquadEmbed = new Discord.RichEmbed()
                    .setTitle(`Statistiques fortnite en **squad** saison ${currentSeason}`)
                    .setThumbnail(
                        "https://image.noelshack.com/fichiers/2019/19/5/1557509075-squad.png"
                    )
                    .setDescription(
                        `Statistiques fortnite en squad pour la saison ${currentSeason} de ${data.username}`
                    )
                    .setColor("#42b6f4")
                    .addField("Wins", currentSquadWins, true)
                    .addField("Kills", currentSquadKills, true)
                    .addField("K/D", currentSquadKd, true)
                    .addField("Matches Joués", currentSquadMatches, true)
                    .addField("Score", currentSquadScore, true)
                message.channel.send(currentSquadEmbed); //Send squad stats
            }
        })
        .catch(e => {
            //Error handling
            //console.log(e);
            return message.reply(
                ":x: h!fortnite <epic-username> [plateforme: pc/xbl/psn] {mode all/solo/season}"
            );  //Send error message
        });
};

module.exports.help = {
    name: "fortnite"
};