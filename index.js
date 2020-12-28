// const { Client, Collection } = require("discord.js");
// const Discord = require("discord.js");
// const { config } = require("dotenv");
// const prefix     = require('./prefix.js')

// const client = new Client({
//     disableEveryone: true
// })

// // Collections
// client.commands = new Collection();
// client.aliases = new Collection();

// config({
//     path: __dirname + "/.env"
// });

// // Run the command loader
// ["command"].forEach(handler => {
//     require(`./handlers/${handler}`)(client);
// });

// client.on("ready", () => {
//     console.log(`${client.user.username} is now online!`);
//     client.user.setActivity(`${prefix}`, { type: "PLAYING" });
// })

// client.on("message", async message => {

//     if (message.author.bot) return;
//     // if (!message.guild) return;
//     // if (!message.content.startsWith(prefix)) return;

//     // If message.member is uncached, cache it.
//     if (!message.member) message.member = await message.guild.fetchMember(message);

//     const args = message.content.slice(prefix.length).trim().split(/ +/g);
//     const cmd = args.shift().toLowerCase();
    
//     // if (cmd.length === 0) return;
//     let mention = message.mentions.users.first();


    
//     if(cmd)
//     {
//         console.log("I give up");
//         let sendt = message.content;
//         message.channel.send("Hi " + sendt.replace("I'm","") + "  I'm dad\n"); 
//     }
// });

// client.login(process.env.BOT_TOKEN);