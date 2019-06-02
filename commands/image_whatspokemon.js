const axios = require("axios");
const Discord = require("discord.js");

module.exports.run = async (client, message, args, level) => {
let member = message.mentions.users.first() || message.author;
axios.get(`https://eclyssia-api.tk/api/v1/whatspokemon?url=${member.avatarURL}`, {
    headers: {
          Authorization: "d6f28808220a19f0e9b9ec30801ae32ad2251e4c9e6e8c42618d6dbf94212f7b"
    },
    responseType: "arraybuffer"
}).then(async(res) => {
    message.channel.send({
        embed: {
          author: {
            name: "Quel Pokémon es tu ?"
          },
          color : 0x6389EF,
          image: {
            url: `attachment://image.png`
          },
        files: [{ 
          attachment: await res.data, 
          name: 'image.png' 
        }], 
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: client.user.username,
        },
        }
    });
}).catch((err) => {
    if (err) return message.channel.send(`Error`);
});
return;
};

module.exports.help = {
    name: "whatspokemon"
}


