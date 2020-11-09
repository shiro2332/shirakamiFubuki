const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'wherefriend',
			group: 'command',
			memberName: 'wherefriend',
			description: 'Where is friends',
		});
	}

	async run(message) {
		return message.channel.send({files: ["./images/watching.png"]})
	}
};