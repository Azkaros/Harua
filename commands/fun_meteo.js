const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (client, message, args) => {
    if (args.length === 0) return message.reply(':x: h!meteo <Ville>') 
    var location = message.content.substr(6);
    var unit = "C";
    
    try {
        weather.find({search: location, degreeType: unit}, function(err, data) {
            if(err) {
                message.reply("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);
            } else {
                data = data[0];
                const embed = new Discord.RichEmbed()
                .setTitle(`Météo de ${data.location.name}`)
                .setTimestamp()
                .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`)
                .setColor('#ffcccc')
                .addField("Maintenant:",`${data.current.temperature}°${unit} ${data.current.skytext}, ressentie  ${data.current.feelslike}°, ${data.current.winddisplay} Vent`)
                .addField("Demain:", `Haut: ${data.forecast[1].high}°, Bas: ${data.forecast[1].low}° ${data.forecast[1].skytextday} avec ${data.forecast[1].precip}% de chance de precipitation.`);
                message.channel.send(embed);
            }
        });
    } catch(err) {
        console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
        message.reply("Idk pourquoi c'est cassé tbh :(");
        }
}

module.exports.help = {
    name: "meteo"
}