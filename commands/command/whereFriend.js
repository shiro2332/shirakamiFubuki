const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'whereFriend',
			group: 'command',
			memberName: 'whereFriend',
			description: 'Where is friends',
		});
	}

	run(message) {
		return message.channel.send({files: ["./Images/watching.png"]})
	}
};