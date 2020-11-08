const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'food',
			group: 'command',
			memberName: 'food',
			description: 'Fav food',
		});
	}

	run(message) {
		return message.channel.send(":hamburger:")
	}
};