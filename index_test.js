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
    
    for(var i = 0; i < am_i.length; i++)
    {
        if(search[i].lang === sendt)
        {
            let greets = searh[i].greeting;
            let hi_dad = search[i].dad;
            let word = sendt.replace(search[i].lang);
            message.inlineReply(greets + word + "," + hi_dad + "\n");
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
    {
        lang: "jag är", // Swedish
        greeting: "Hallo", 
        dad: "jag är pappa"
    }
];

var am_i = {
    afrikaans: "ek is",
    // arabic: "أَنَا ",
    // ch: "我是",  
    // es: "yo estoy" || "yo soy", 
    // esperanto: "mi estas", 
    // de: "ich bin",
    // dk: "jeg er", 
    // en: "i am" || "i'm",
    // fr: "je suis", 
    // hawaian: "eia au", 
    // is: "ég er", 
    // nl: "ik ben", 
    // no: "jeg er" || "eg er" || "æg e" || "æ e", 
    // po: "jestem", 
    // se: "jag är", 
    // somali: "aniga"
};

var greeting = {
    afrikaans: "Hallo,", 
    arabic: ",مرحبا", 
    ch: "你好,", 
    es: "Hola,", 
    esperanto: "Saluton,", 
    de: "Hallo,", 
    dk: "Hallo,", 
    fr: "Salut,", 
    hawaian: "Aloha,", 
    is: "Halló,",
    nl: "Hallo,",
    no: "Hei,",
    po: "Cześć,",
    se: "Hallo,",
    somali: "As-Salam Alaykum,"
};

var dad = {
    afrikaans: "ek is pa", 
    arabic: "أَنَا بابا ", 
    ch: "我是爸爸",
    es: "yo soy papa", 
    esperanto: "mi estas paĉjo", 
    de: "ich bin Papa", 
    dk: "jeg er pappa", 
    fr: "je suis papa", 
    hawaian: "ʻO wau ka makuakāne", 
    is: "ég er pabbi", 
    nl: "ik ben papa", 
    no: "jeg er pappa", 
    po: "jestem tatą", 
    se: "jag är pappa", 
    somali: "aniga waxaan ahay aabo", 

};