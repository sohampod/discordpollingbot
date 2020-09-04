const Discord = require('discord.js');

const bot = new Discord.Client();


const prefix = '.';

const fs = require('fs');

bot.commands = new Discord.Collection();

const commnadFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commnadFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log('This pollbot is online!');
    bot.user.setActivity('.help' , { type: "LISTENING"}).catch(console.error);
});


bot.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;



    const args = message.content.substring(prefix.length).split(" ");

    const command = args.shift().toLowerCase();


if (command === 'help'){

    bot.commands.get('help').execute(message, args);
} 



});









bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    


    if (cmd === '.poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle(' New Poll! ')
        .setDescription(pollDescription)
        .setColor('YELLOW')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }


   

})






bot.login(process.env.token);