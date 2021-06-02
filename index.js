require('./ExtendedMessage');
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
        message.inlineReply("Hi " + sendt.replace(eng,"") + ", I'm dad\n");
    }
    if (message.content.startsWith(eng1))
    {
        message.inlineReply("Hi " + sendt.replace(eng1,"") + ", I'm dad\n");
    }

    if (message.content.startsWith(eng2))
    {
        message.inlineReply("Hi " + sendt.replace(eng2,"") + ", I'm dad\n");
    }
    if (message.content.startsWith(eng3))
    {
        message.inlineReply("Hi " + sendt.replace(eng3,"") + ", I'm dad\n");
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
        message.inlineReply("Coucou " + sendt.replace(fr1,"") + ", je suis papa\n");
    }
    
    if (message.content.startsWith(fr2))
    {
        message.inlineReply("Hei " + sendt.replace(fr2,"") + ", je suis papa\n");
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
        message.inlineReply("Heia " + sendt.replace(nor1,"") + ", æ e pappa\n");
    }
    
    if (message.content.startsWith(nor2))
    {
        message.inlineReply("Hei " + sendt.replace(nor2,"") + ", eg er pappa\n");
    }
    if (message.content.startsWith(nor3))
    {
        message.inlineReply("Hei " + sendt.replace(nor3,"") + ", jeg er pappa\n");
    }
    
    if (message.content.startsWith(nor4))
    {
        message.inlineReply("Heia " + sendt.replace(nor4,"") + ", æ e pappa\n");
    }
    
    if (message.content.startsWith(nor5))
    {
        message.inlineReply("Hei " + sendt.replace(nor5,"") + ", eg e pappa\n");
    }
    
    if (message.content.startsWith(nor6))
    {
        message.inlineReply("Hei " + sendt.replace(nor6,"") + ", jeg er pappa\n");
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
        message.inlineReply("Hallo " + sendt.replace(du,"") + ", ik ben papa\n");
    }
    if (message.content.startsWith(du1))
    {
        message.inlineReply("Hallootjes " + sendt.replace(du1,"") + ", ik ben papa\n");
    }
    /* 
    * -----------------------------------------------------
    * --------------------- Spanish -----------------------
    * -----------------------------------------------------
    */
    let es  = "estoy";
    let es1 = "Estoy";

    if (message.content.startsWith(es))
    {
        message.inlineReply("Hola " + sendt.replace(es,"") + ", yo soy papá \n");
    }
    if (message.content.startsWith(es1))
    {
        message.inlineReply("Hola " + sendt.replace(es1,"") + ", yo soy papá\n");
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