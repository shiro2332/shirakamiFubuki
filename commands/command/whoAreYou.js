const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'who_are_you',
			group: 'command',
			memberName: 'who_are_you',
			description: 'Who is Fubuki',
		});
	}

	run(message) {
		return message.channel.send("I'm Scatman")
	}
};