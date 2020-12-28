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
    // if (sendt.includes(word))
    if (message.content.startsWith(word))
    {
        // let more = message.content;
        message.channel.send("Hi " + sendt.replace("I'm","") + " I'm dad\n"); 
        // message.channel.send("something else");
    }


    
    // if(cmd == `${prefix}`)
    // {
    //     console.log("I give up");
    //     let sendt = message.content;
    //     message.channel.send("Hi " + sendt.replace("I'm","") + "  I'm dad\n"); 
    // }
});

client.login(process.env.BOT_TOKEN);