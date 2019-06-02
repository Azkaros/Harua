const Discord = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');

module.exports.run = async (client, message, args) => {
    const content = message.content.split(' ');
   
      const rows = parseInt(args[0]);
      const columns = parseInt(args[1]);
      const mines = parseInt(args[2]);
   
      if (!rows) {
        message.reply(':x: h!démineur <NOMBREDELIGNE NOMBREDECOLOGNE NOMBREDEBOMBES>')
        return
      }
   
      if (!columns) {
        message.reply(':x: h!démineur <NOMBREDELIGNE NOMBREDECOLOGNE NOMBREDEBOMBES>')
        return
      }
   
      if (!mines) {
        message.reply(':x: h!démineur <NOMBREDELIGNE NOMBREDECOLOGNE NOMBREDEBOMBES>')
        return
      }
   
      const minesweeper = new Minesweeper({ rows, columns, mines });
      const matrix = minesweeper.start();
   
      return matrix
        ? message.channel.send(matrix)
        : message.channel.send(':warning: Vous avez fourni des données non valides.');
    };

module.exports.help = {
    name: "démineur"
}
