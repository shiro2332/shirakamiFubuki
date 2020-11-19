const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'suisei',
			group: 'command',
			memberName: 'suisei',
			description: 'Become suisei',
		});
	}

	run(message) {
		avatar = "suisei.png"
		client.user.setAvatar(avatar)
		client.user.setUsername("Hoshimachi Suisei")
	}
};