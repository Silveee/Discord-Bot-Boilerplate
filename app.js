'use strict';

const discord = require('discord.js');
const config = require('./config');

const bot = new discord.Client();

// Merge all commands from all files in the commands folder into a single object
const commands = {};

for (const file of require('fs').readdirSync('./commands'))
	if (file.endsWith('.js')) Object.assign(commands, require('./commands/' + file));

bot.on('message', message => {
	// Only respond to text-type messages that start with the command token,
	// Do not respond if the sender of the message is a bot
	if (message.channel.type !== 'text' || !message.content.startsWith(config.COMMAND_CHAR) || message.author.bot) return;

	let commandName = message.content.split(' ')[0].slice(1);
	const args = message.content.slice(commandName.length + 2).trim();
	if (commandName in commands) {
		let command = commands[commandName];
		// If the value associated with the command in the commands object is a string,
		// then it's an alias for another command
		if (typeof command === 'string') command = commands[command];
		command({ args, command: commandName, channel: message.channel, user: message.member, mentions: message.mentions });
	}
});

console.log('Logging in...');
bot.login(config.BOT_TOKEN)
	.then(() => console.log(`Logged in as ${bot.user.tag}.`))
	.catch(err => {
		console.log('Bot Error:', err.message);
		process.exit();
	});