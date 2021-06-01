const Discord  = require('discord.js');


module.exports = 
{
    name: "i'm",
    category: 'dadjokes',
    description: 'dad jokes text ',
    run: async(client,message,args) =>
    {
        var affir = Math.floor(Math.random()*(dad.length));
        var embed = new Discord.MessageEmbed()
        var embed = new Discord.MessageEmbed()
            .setDescription("Hi " + sendt.replace("i'm","") + ", I'm dad\n")
            .setColor("#000000")
            // .setFooter("Dad")
        message.channel.send(embed);
    }
}



