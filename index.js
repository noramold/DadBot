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
    client.user.setActivity(`${prefix}  ` + "|| " + "dad jokes", { type: "PLAYING" });
})

client.on("message", async message => {
    
    if (message.author.bot) return;
    if (!message.guild) return;
    let sendt = message.content;
    let word = "I'm";
    let word1 = "i'm";
    let word2 = "I'M";
    let word3 = "i am";
    let word4 = "I am";
    let word5 = "æ e ";
    let word6 = "eg e";
    let word7 = "jeg er";
    let word8 = "Æ e";
    let word9 = "Eg e";
    let word10 = "Jeg er";
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
    if (message.content.startsWith(word2))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hi " + sendt.replace(word2,"") + ", I'm dad\n")
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

    
    if (message.content.startsWith(word5))
    {
        var embed = new Discord.MessageEmbed()
        .setDescription("Heia " + sendt.replace(word5,"") + ", æ e pappa\n")
        .setColor("#000000")
        // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    
    if (message.content.startsWith(word6))
    {
        var embed = new Discord.MessageEmbed()
        .setDescription("Hei " + sendt.replace(word6,"") + ", eg er pappa\n")
        .setColor("#000000")
        // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    if (message.content.startsWith(word7))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hei " + sendt.replace(word7,"") + ", jeg er pappa\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    
    if (message.content.startsWith(word8))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Heia " + sendt.replace(word8,"") + ", æ e pappa\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    
    if (message.content.startsWith(word9))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hei " + sendt.replace(word9,"") + ", eg e pappa\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    
    if (message.content.startsWith(word10))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hei " + sendt.replace(word10,"") + ", jeg er pappa\n")
                .setColor("#000000")
                // .setFooter("Dad")
        message.channel.send(embed);
        // let more = message.content;
        // message.channel.send("Hi " + sendt.replace("I'm","") + ", I'm dad\n"); 
    }
    


    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    let mention = message.mentions.users.first();
    

    // Get the command
    let command = client.commands.get(cmd);

    if (command) 
    {
        command.run(client, message, args,mention);
    }
    
    // if(cmd == `${prefix}`)
    // {
    //     console.log("I give up");
    //     let sendt = message.content;
    //     message.channel.send("Hi " + sendt.replace("I'm","") + "  I'm dad\n"); 
    // }
});

client.login(process.env.BOT_TOKEN);