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

	run(message) {
		return message.channel.send({files: [attachment: "../../assets/images/watching.png", name: "watching.png"]})
	}
};