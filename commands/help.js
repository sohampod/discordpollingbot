const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'shows bot commands',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor(0xFF7E62)
        .setTitle("HELP")
        .setDescription("Type .poll <#channel-name> your query. \n its that simple dumbass.");

        message.channel.send(exampleEmbed);
    }
}