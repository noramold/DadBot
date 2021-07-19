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
    
    let sendt = message.content.toLowerCase();
    
    for(var i = 0; i < search.length; i++)
    {
            // console.log(search[i]);
            // console.log(sendt);
        
            // for(var j = 0; j < search[i].lang.length; j ++)
            // {
            //     let lang = search[i].lang[j];
            //     if(sendt.startsWith(lang)) // || sendt.endsWith(search[1].lang))
            //     {            
            //         console.log("WELP");
            //         message.inlineReply("Huh what the fuck" + "\n");
            //     }
            // }

            if(sendt.startsWith(search[i].lang)) // || sendt.endsWith(search[1].lang))
            {
                let word    = sendt.replace(search[i].lang,""); // What people sent with out I'm
                let greets  = search[i].greeting; // Greeting e.g Hello
                let hi_dad  = search[i].dad; // I'm dad reply 
                let no_i_am = search[i].not; // No in different languages
                
                console.log(sendt);
                console.log(hi_dad);
                if(sendt === hi_dad)
                {
                    message.inlineReply(no_i_am + ", " + hi_dad + "\n");
                }
                else
                    message.inlineReply(greets + word + ", " + hi_dad + "\n");

                /* Making sure arabic is the right way */
                // if(search[i].lang === أَنَا)
                // {
                    //     message.inlineReply(hi_dad + "," + word + greets + "\n");
                    // }
                    
            }
    }

    
});

client.login(process.env.BOT_TOKEN);

var search = [
    {
        lang: "ek is", // Afrikaans
        greeting: "Hallo", 
        dad: "ek is pa", 
        not: "Nee"
    }, 
    // {
    //     lang: "أَنَا", // Arabic
    //     greeting: "مرحبا", 
    //     dad: "أَنَا بابا", 
    // },
    {
        lang: "我是", // Chinese
        greeting: "你好", 
        dad: "我是爸爸", 
        not: "不"
    },
    {
        lang: "jeg er", // Danish & Norwegian
        greeting: "Hallo", 
        dad: "jeg er pappa", 
        not: "Nei"
    },
    {
        lang: "ik ben", // Dutch
        greeting: "Hallo", 
        dad: "ik ben papa", 
        not: "Nee"
    },
    {
        lang: "mi estas", // Esperanto
        greeting: "Saluton", 
        dad: "mi estas paĉjo",
        not: "Ne" 
    },
    {
        lang: "i am", // English
        greeting: "Hello", 
        dad: "i am dad", 
        not: "No"
    },
    {
        lang: "i'm", // English
        greeting: "Hi", 
        dad: "i'm dad", 
        not: "No"
    },
    {
        lang: "i’m", // English
        greeting: "Hi", 
        dad: "i’m dad", 
        not: "No"
    },
    {
        lang: "je suis", // French 
        greeting: "Salut", 
        dad: "je suis papa", 
        not: "Non"
    },
    {
        lang: "ich bin", // German
        greeting: "Hallo", 
        dad: "ich bin papa", 
        not: "Nein"
    },
    {
        lang: "eia au",  // Hawaiian
        greeting: "Aloha", 
        dad: "ʻo wau ka makuakāne", 
        not: "Aʻole", 
    },
    {
        lang: "ég er", // Iclandic
        greeting: "Halló", 
        dad: "ég er pabbi", 
        not: "Nei"
    },
    // {
    //     lang:  "jeg er", // ["jeg er","eg er","æ e","æg e"], // Norwegian
    //     greeting: "Hei", 
    //     dad: "jeg er pappa", 
    //     not: "Nei"
    // },
    {
        lang: "jestem", // Polish
        greeting: "Cześć", 
        dad: "jestem tatą", 
        not: "Nie"
    },
    {
        lang: "aniga", // Somali
        greeting: "As-Salam Alaykum", 
        dad: "aniga waxaan ahay aabo", 
        not: "Maya"
    },
    {
        lang: "yo soy", //Spanish
        greeting: "Hola", 
        dad: "yo soy papa", 
        not: "No"
    },
    {
        lang: "jag är", // Swedish
        greeting: "Hallo", 
        dad: "jag är pappa", 
        not: "Nej"
    }, 

    /* LAME THING */
    // {
    //     lang: "i'm dad", // dad thing, 
    //     greeting: "No",
    //     dad: "i'm dad"
    // }
];
