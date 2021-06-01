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
    client.user.setActivity(`${prefix}help ` + "|| " + "dad jokes", { type: "PLAYING" });
})

client.on("message", async message => {
    
    if (message.author.bot) return;
    if (!message.guild) return;
    
    let sendt = message.content;

    /* 
    * -----------------------------------------------------
    * ------------------- English -------------------------
    * -----------------------------------------------------
    */
    let eng = "I'm";
    let eng1 = "i'm";
    let eng2 = "i am";
    let eng3 = "I am";

    if (message.content.startsWith(eng))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hi " + sendt.replace(eng,"") + ", I'm dad\n")
                .setColor("#000000")
        message.channel.send(embed);
    }
    if (message.content.startsWith(eng1))
    {
        var embed = new Discord.MessageEmbed()
            .setDescription("Hi " + sendt.replace(eng1,"") + ", I'm dad\n")
            .setColor("#000000")
        message.channel.send(embed);
    }

    if (message.content.startsWith(eng2))
    {
        var embed = new Discord.MessageEmbed()
            .setDescription("Hi " + sendt.replace(eng2,"") + ", I'm dad\n")
            .setColor("#000000")
        message.channel.send(embed);
    }
    if (message.content.startsWith(eng3))
    {
        var embed = new Discord.MessageEmbed()
            .setDescription("Hi " + sendt.replace(eng3,"") + ", I'm dad\n")
            .setColor("#000000")
        message.channel.send(embed);
    }
    
    /* 
    * -----------------------------------------------------
     * ------------------- French --------------------------
     * -----------------------------------------------------
     */
    
    let fr1 = "je suis"
    let fr2 = "Je suis"

    if (message.content.startsWith(fr1))
    {
        var embed = new Discord.MessageEmbed()
        .setDescription("Coucou " + sendt.replace(fr1,"") + ", je suis papa\n")
        .setColor("#000000")
        message.channel.send(embed);
    }
    
    if (message.content.startsWith(fr2))
    {
        var embed = new Discord.MessageEmbed()
        .setDescription("Hei " + sendt.replace(fr2,"") + ", je suis papa\n")
        .setColor("#000000")
        message.channel.send(embed);
    }

    
    /* 
    * -----------------------------------------------------
    * ------------------ Norwegian ------------------------
    * -----------------------------------------------------
    */

    
    let nor1 = "æ e ";
    let nor2 = "eg e";
    let nor3 = "jeg er";
    let nor4 = "Æ e";
    let nor5 = "Eg e";
    let nor6 = "Jeg er";

    if (message.content.startsWith(nor1))
    {
    var embed = new Discord.MessageEmbed()
    .setDescription("Heia " + sendt.replace(nor1,"") + ", æ e pappa\n")
    .setColor("#000000")
        message.channel.send(embed);
    }
    
    if (message.content.startsWith(nor2))
    {
        var embed = new Discord.MessageEmbed()
        .setDescription("Hei " + sendt.replace(nor2,"") + ", eg er pappa\n")
        .setColor("#000000")
        message.channel.send(embed);
    }
    if (message.content.startsWith(nor3))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hei " + sendt.replace(nor3,"") + ", jeg er pappa\n")
                .setColor("#000000")
        message.channel.send(embed);
    }
    
    if (message.content.startsWith(nor4))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Heia " + sendt.replace(nor4,"") + ", æ e pappa\n")
                .setColor("#000000")
        message.channel.send(embed);
    }
    
    if (message.content.startsWith(nor5))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hei " + sendt.replace(nor5,"") + ", eg e pappa\n")
                .setColor("#000000")
        message.channel.send(embed);
    }
    
    if (message.content.startsWith(nor6))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hei " + sendt.replace(nor6,"") + ", jeg er pappa\n")
                .setColor("#000000")
        message.channel.send(embed);
    }
    
    /* 
    * -----------------------------------------------------
    * --------------------- Dutch -------------------------
    * -----------------------------------------------------
    */
    let du  = "ik ben";
    let du1 = "Ik ben";

    if (message.content.startsWith(du))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hallo  " + sendt.replace(du,"") + ", ik ben papa\n")
                .setColor("#000000")
        message.channel.send(embed);
    }
    if (message.content.startsWith(nor6))
    {
        var embed = new Discord.MessageEmbed()
                .setDescription("Hallootjes  " + sendt.replace(du,"") + ", ik ben papa\n")
                .setColor("#000000")
        message.channel.send(embed);
    }
    /* 
    * -----------------------------------------------------
    * -----------------------------------------------------
    * -----------------------------------------------------
    */

     // if (message.author.bot) return;
    // if (!message.guild) return;
    if (!message.content.toLocaleLowerCase().startsWith(prefix)) return;
    
    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    let mention = message.mentions.users.first();
    

    // Get the command
    let command = client.commands.get(cmd);
    var count = 0;
    var incr = 0;
    if (command) 
    {
        command.run(client, message, args,mention);
    }

    

    
});

client.login(process.env.BOT_TOKEN);