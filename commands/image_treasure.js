const axios = require("axios");
const Discord = require("discord.js");

module.exports.run = async (client, message, args, level) => {
let member = message.mentions.users.first() || message.author;
axios.get(`https://eclyssia-api.tk/api/v1/treasure?url=${member.avatarURL}`, {
    responseType: "arraybuffer"
}).then(async(res) => {
    message.channel.send({
        embed: {
          author: {
            name: "It is very magnifique !"
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
    name: "treasure"
}


