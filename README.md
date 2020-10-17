# Discord Bot Boilerplate
This repository provides some simple scaffolding for a discord bot. If you're looking for a quick, easy way to set up a bot for your discord server and start writing commands for it in Node.js, you might find this repo helpful.

## Setup
Clone this repository and rename `.sample-env` to `.env`. Set `BOT_TOKEN` to your discord bot's token, which you can get from the (Discord Developer Portal)[https://discord.com/developers/applications/].
`COMMAND_TOKEN` is the character that is prefixed to bot commands, and can be changed at any time.

## Writing commands
All commands go into files in the `commands` folder. Every file should export an object of the following format:
```node
{
	commandName1: function({...}) {...},
	commandName2: function({...}) {...},
	commandAlias3: 'commandName3',
	commandName3: function() {...},
}
```
A command with an associated value of type `String` will be treated as an alias (for eg. `commandAlias3`).

Commands are passed the following arguments in the form of an Object:
`args (String)` - Command argument associated with the used command
`command (String)` - Name of the command used by the user
`user (GuildMember)` - GuildMember object of the user who used the command
`channel (TextChannel)` - Object of the channel in which the message was sent
`mentions (MessageMentions)` - Object containing all mentions/pings in the message

Refer to the discord.js (documentation)[https://discord.js.org/#/] for more information on how to use the discord bot API.

## Running the bot
Make sure you have node.js and npm installed. Navigate to this repo's root on your terminal and run `npm install`. Then run `npm start`.