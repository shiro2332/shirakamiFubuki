const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: '',
			group: 'command',
			memberName: '',
			description: '',
		});
	}

	run(message) {
		return message.channel.send("Kon Kon")
	}
};