
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
            .setAuthor("The Wilds Bot")
            .setDescription(help)
            .setThumbnail("https://tvline.com/wp-content/uploads/2020/11/the-wilds-poster-amazon.jpg?w=449")
            .setColor("#414084")
        message.channel.send(embed);
    }
}
const help = 
`
•***${prefix}dadjokes *new/top/hot***
•***${prefix}dadtext***
`

//asd
// •***${prefix}gif word*** for random gifs with connetion to a word. e.g *cool*
// •*${prefix} memes* for the wilds memes
// •*${prefix} quotes* for the wilds quotes




// module.exports = help