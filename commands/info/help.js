
const prefix  = require('../../prefix.js')

const Discord  = require('discord.js');
module.exports = 
{
    name: 'help',
    category: 'info',
    description: 'all the commands',
    run: async(client,message,args) =>
    {
        message.channel.send(help);
    }
}

const help = new Discord.MessageEmbed()
    .setTitle('Dadbot commands')
    .setThumbnail("https://c8.alamy.com/comp/PHG588/look-at-me-i-am-cool-dad-portrait-of-handsome-adult-bearded-male-in-trendy-sunglasses-and-denim-jacket-pointing-at-himself-and-smiling-broadly-introducing-to-people-on-disco-party-over-grey-wall-PHG588.jpg")

    //.setDescription('My prefix is: ' + `${prefix}`)
    .addFields(
        { name: 'Reddit dadjokes 🤭    ', value:  '`' + `${prefix}` + 'reddit' + '`', inline: true},
        { name: 'Random dadjokes 😎',  value: '`' + `${prefix}` + 'joke' + '`', inline: true},
    )
//asd
// •***${prefix}gif word*** for random gifs with connetion to a word. e.g *cool*
// •*${prefix} memes* for the wilds memes
// •*${prefix} quotes* for the wilds quotes




