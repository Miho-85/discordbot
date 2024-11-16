require('dotenv').config();

const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});


client.on('ready', (c) => {
    console.log(`${client.user.displayName} is online | [NO | F811K5]`)
});

client.on('messageCreate', (message) => {
    console.log(`${message.author.displayName} : ${message.content}`)
});

client.login(process.env.TOKEN);