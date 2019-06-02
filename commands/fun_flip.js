const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (args.length === 0) return message.reply(':x: h!flip <Texte à retourner>') 

message.channel.send(
    args.join(' ').split('')
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || ' ')
        .reverse().join('')
);
message.delete().catch(O_o=>{}); 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "flip",
  category: "Miscelaneous",
  description: "Flips your text.",
  usage: "flip [text]"
};