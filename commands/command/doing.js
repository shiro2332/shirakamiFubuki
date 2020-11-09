const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dowat',
			group: 'command',
			memberName: 'dowat',
			description: 'What is Fubuki doing',
		});
	}

	async run(message) {
		return message.channel.send({files: ["./assets/images/chill.jpg"]})
	}
};