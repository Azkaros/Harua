const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();

module.exports = async (client, message) => {

// Definir le prefix
const prefix = client.config.prefix;

// Trouver et executer la commande selon ce qu'a entrer l'utilisateur !  
if(message.author.bot) return;
if(message.content.indexOf(prefix) !== 0) return;


const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

let messageArray = message.content.split(" ");
let commandFile = client.commands.get(command.slice(prefix.lenght));
if (commandFile) commandFile.run(client, message, args);
// Fin de la recherche et de l'execution
}
