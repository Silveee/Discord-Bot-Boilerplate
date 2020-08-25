'use strict';

require('dotenv').config();

if (!process.env.BOT_TOKEN) {
	console.log('Define BOT_TOKEN in your .env file before running this.');
	process.exit();
}

const discord = require('discord.js');

const COMMAND_TOKEN = process.env.COMMAND_TOKEN || '.';
const bot = new discord.Client();
const commands = require('./commands');

bot.on('message', message => {
	if (message.channel.type !== 'text' || !message.content.startsWith(COMMAND_TOKEN)) return;

	let commandName = message.content.split(' ')[0].slice(1);
	const arg = message.content.slice(commandName.length + 2).trim();
	if (commandName in commands) {
		let command = commands[commandName];
		if (typeof command === 'string') command = commands[command]; // Command alias
		command(arg, message.channel, message.member, message.mentions);
	}
});

console.log('Logging in...');
bot.login(process.env.BOT_TOKEN).then(() => console.log(`Logged in as ${bot.user.tag}.`))
	.catch(err => {
		console.log('Bot Error:', err.message);
		process.exit();
	});