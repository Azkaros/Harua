//Liste des fichiers et librairies requies
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const Enmap = require("enmap");
const fs = require('fs');

//Recherche de dossier pour les commandes
client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) =>{
  if(err) console.log(`Aucun dossier trouvé`); 
//Recherche des commandes
  let jsFile = files.filter(f => f.split('.').pop() === 'js');
  if (jsFile.length <= 0) {console.log('Aucune commande trouvée');
  return;
  }
  jsFile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
});

//Recherche de dossier pour les évents
fs.readdir("./évents/", (err, files) => {
  let jsFiles = files.filter(f => f.split('.').pop() === 'js')  
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./évents/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.config = config;
client.login(config.token);