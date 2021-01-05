
const prefix  = require('../../prefix.js')

const Discord  = require('discord.js');
module.exports = 
{
    name: 'help',
    category: 'info',
    description: 'all the commands',
    run: async(client,message,args) =>
    {
        var embed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setAuthor("Dad Bot")
            .setDescription(help)
            .setThumbnail("https://c8.alamy.com/comp/PHG588/look-at-me-i-am-cool-dad-portrait-of-handsome-adult-bearded-male-in-trendy-sunglasses-and-denim-jacket-pointing-at-himself-and-smiling-broadly-introducing-to-people-on-disco-party-over-grey-wall-PHG588.jpg")
            .setColor("#414084")
        message.channel.send(embed);
    }
}
const help = 
`
•***${prefix}dadjoke *new/top/hot***
•***${prefix}dadtext random dadjokes***
`

//asd
// •***${prefix}gif word*** for random gifs with connetion to a word. e.g *cool*
// •*${prefix} memes* for the wilds memes
// •*${prefix} quotes* for the wilds quotes




// module.exports = help