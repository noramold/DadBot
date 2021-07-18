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
                let word = sendt.replace(search[i].lang,"");
                let greets = search[i].greeting;
                let hi_dad = search[i].dad;

                let hi = sendt.replace("i'm","");
                let hi1 = sendt.replace("i am", "")
                
                if(hi === " dad" || hi1 === " dad")
                    message.inlineReply("No, I'm dad\n");
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
        dad: "ek is pa"
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
    },
    {
        lang: "jeg er", // Danish 
        greeting: "Hallo", 
        dad: "jeg er pappa", 
    },
    {
        lang: "ik ben", // Dutch
        greeting: "Hallo", 
        dad: "ik ben papa", 
    },
    {
        lang: "mi estas", // Esperanto
        greeting: "Saluton", 
        dad: "mi estas paĉjo", 
    },
    {
        lang: "i am", // English
        greeting: "Hello", 
        dad: "i'm dad", 
    },
    {
        lang: "i'm", // English
        greeting: "Hi", 
        dad: "i'm dad", 
    },
    {
        lang: "je suis", // French 
        greeting: "Salut", 
        dad: "je suis papa", 
    },
    {
        lang: "ich bin", // German
        greeting: "Hallo", 
        dad: "ich bin papa", 
    },
    {
        lang: "eia au",  // Hawaiian
        greeting: "Aloha", 
        dad: "ʻO wau ka makuakāne", 
    },
    {
        lang: "ég er", // Iclandic
        greeting: "Halló", 
        dad: "ég er pabbi", 
    },
    {
        lang:  "jeg er", // ["jeg er","eg er","æ e","æg e"], // Norwegian
        greeting: "Hei", 
        dad: "jeg er pappa", 
    },
    {
        lang: "jestem", // Polish
        greeting: "Cześć", 
        dad: "jestem tatą", 
    },
    {
        lang: "aniga", // Somali
        greeting: "As-Salam Alaykum", 
        dad: "aniga waxaan ahay aabo", 
    },
    {
        lang: "yo soy", //Spanish
        greeting: "Hola", 
        dad: "yo soy papa", 
    },
    {
        lang: "jag är", // Swedish
        greeting: "Hallo", 
        dad: "jag är pappa"
    }, 

    /* LAME THING */
    // {
    //     lang: "i'm dad", // dad thing, 
    //     greeting: "No",
    //     dad: "i'm dad"
    // }
];
