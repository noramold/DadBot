const Discord  = require('discord.js');
const redditFetch = require('reddit-fetch')
module.exports = 
{
    name: 'dadjoke',
    category: 'pics',
    description: 'memes basically',
    run: async(client,message,args) =>
    {
        var count = 0;
        // var embed = new Discord.MessageEmbed()

        if(args[0].toLowerCase() == "new")
        {
            
            redditFetch({

                subreddit: 'dadjokes',
                sort: 'new', 
                allowNSFW: false,
                allowModPost: true, 
                allowCrossPost: true, 
            
            }).then(post => {
                // var embed = new Discord.MessageEmbed()
                // .setURL(`${post.url}`)
                // .setDescription("A meme for you")
                message.channel.send(`${post.url}`);
            });

            count++;
        }
        if(args[0].toLowerCase() == "hot")
        {
            
            redditFetch({

                subreddit: 'dadjokes',
                sort: 'hot', 
                allowNSFW: false,
                allowModPost: true, 
                allowCrossPost: true, 
            
            }).then(post => {
                // var embed = new Discord.MessageEmbed()
                // .setURL(`${post.url}`)
                // .setDescription("A meme for you")
                message.channel.send(`${post.url}`);
            });
            count++;

        }
        if(args[0].toLowerCase() == "top")
        {
            
            redditFetch({

                subreddit: 'dadjokes',
                sort: 'top', 
                allowNSFW: false,
                allowModPost: true, 
                allowCrossPost: true, 
            
            }).then(post => {
                // var embed = new Discord.MessageEmbed()
                // .setURL(`${post.url}`)
                // .setDescription("A meme for you")
                message.channel.send(`${post.url}`);
            });
            count++;
        }
        
        if(args[0].toLowerCase === "stats")
        {

            console.log("wtf");
            var embed = new Discord.MessageEmbed()
            // .setDescription("Bot has been used " + count + "times")
            .setDescription("I work")
            .setColor("#000000")
            message.channel.send(embed);
        }
    }
}