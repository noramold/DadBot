const Discord  = require('discord.js');
const redditFetch = require('reddit-fetch')
module.exports = 
{
    name: 'reddit',
    category: 'pics',
    description: 'memes basically',
    run: async(client,message,args) =>
    {
        var count = 0;
        // var embed = new Discord.MessageEmbed()

        // if(args[0] == "new")
        // {
            
            // redditFetch({

            //     subreddit: 'dadjokes',
            //     sort: 'new', 
            //     allowNSFW: false,
            //     allowModPost: true, 
            //     allowCrossPost: true, 
            
            // }).then(post => {
            //     // var embed = new Discord.MessageEmbed()
            //     // .setURL(`${post.url}`)
            //     // .setDescription("A meme for you")
            //     message.channel.send(`${post.url}`);
            // });

        //     count++;
        // }
        // if(args[0] == "hot")
        // {
            
        redditFetch({

            subreddit: 'dadjokes',
            sort: 'hot', 
            allowNSFW: false,
            allowModPost: true, 
            allowCrossPost: true, 
            allowVideo: false
            // showDescription: true
            
        }).then(post => {
            // var embed = new Discord.MessageEmbed()
            // .setURL(`${post.url}`)
            // .setDescription("A meme for you")
            message.channel.send("A dad joke for you my child!" + "\n" + `${post.url}`); // + `${post.description}`);
        });
        // count++;

        // }
        // if(args[0] == "top")
        // {
            
        //     redditFetch({

        //         subreddit: 'dadjokes',
        //         sort: 'top', 
        //         allowNSFW: false,
        //         allowModPost: true, 
        //         allowCrossPost: true, 
            
        //     }).then(post => {
        //         // var embed = new Discord.MessageEmbed()
        //         // .setURL(`${post.url}`)
        //         // .setDescription("A meme for you")
        //         message.channel.send(`${post.url}`);
        //     });
        //     count++;
        // }
        
        // if(args[0].toLowerCase === "stats")
        // {

        //     console.log("wtf");
        //     var embed = new Discord.MessageEmbed()
        //     // .setDescription("Bot has been used " + count + "times")
        //     .setDescription("I work")
        //     .setColor("#000000")
        //     message.channel.send(embed);
        // }
    }
}