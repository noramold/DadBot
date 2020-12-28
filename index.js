const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const prefix     = require('./prefix.js')

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);
    client.user.setActivity(`${prefix}`, { type: "PLAYING" });
})

client.on("message", async message => {
    
    if (message.author.bot) return;
    if (!message.guild) return;
    let sendt = message.content;
    let word = "I'm";
    let word1 = "i'm";
    // let word2 = "im";
    let word3 = "i am";
    let word4 = "I am";
    // if (sendt.includes(word))
    if (message.content.startsWith(word))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hi " + sendt.replace(word,"") + ", I'm dad\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    if (message.content.startsWith(word1))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hi " + sendt.replace(word1,"") + ", I'm dad\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    if (message.content.startsWith(word3))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hi " + sendt.replace(word3,"") + ", I'm dad\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    if (message.content.startsWith(word4))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hi " + sendt.replace(word4,"") + ", I'm dad\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }


    
    // if(cmd == `${prefix}`)
    // {
    //     console.log("I give up");
    //     let sendt = message.content;
    //     message.channel.send("Hi " + sendt.replace("I'm","") + "  I'm dad\n"); 
    // }
});

client.login(process.env.BOT_TOKEN);