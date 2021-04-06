# Discord Bot Boilerplate
This repository provides some simple scaffolding for a discord bot. If you're looking for a quick, easy way to set up a bot for your discord server and start writing commands for it in Node.js, you might find this repo helpful.


## Setup
Clone this repository and rename/copy `sample-config.yml` to `.config.yml`. You can use this to set any additional configuration values you need, as opposed to hard-coding them. This file contains 2 values by default: `BOT_TOKEN`, and `COMMAND_CHAR`.

`BOT_TOKEN` must be set to your discord bot's token. You can obtain by doing the following:<br />
1) Go to the [Discord Developer Portal](https://discord.com/developers/applications/).<br />
2) Click on your application, or "New Application" if you don't have one<br />
3) Click on "Bot" on the left nav, and then click on "Add Bot" if you haven't already. Your bot token should be available on this page.

`COMMAND_CHAR` is the character that should prepended to a message containing a command for the bot to parse it.


## Writing commands
All commands go into files in the `commands` folder. Commands can be placed in different files with different names within the same folder. When a user tries to execute a command, Every file should export an object with each key's value being either a `function` that specifies what should be done when that command is used, or a `string`, which acts as an alias for another command. A small example is given in `commands/test.js`.<br />
Command parsing works by listening to `message` events with the discord API, checking if received messages fulfil certain conditions (in this case, checking if the message begins with `COMMAND_CHAR` and if the command name provided actually exists), and then calling the function associated with the provided command name if those conditions are met.<br />
When this script is run, all objects exported by files in `commands/` will be merged into a single object. When a user attempts to use a command, this object is checked to see if the provided command name exists in it. If it does, the corresponding function is called.

The following arguments are passed to command functions:<br />
`user` ([Message](https://discord.js.org/#/docs/main/stable/class/Message)) - Message object of the message sent by the user who intended to use this command. Contains references to many other objects such as the [GuildMember](https://discord.js.org/#/docs/main/stable/class/GuildMember) or [MessageMentions](https://discord.js.org/#/docs/main/stable/class/MessageMentions) associated with the message, which can be useful.<br />
`args` (String) - Command arguments associated with the used command<br />
`commandName` (String) - Name of the command used by the user

Refer to the discord.js API [documentation](https://discord.js.org/#/) for more information on how to use their APIs.
