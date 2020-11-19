const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'fbk',
			group: 'command',
			memberName: 'fbk',
			description: 'Become fubuki',
		});
	}

	run(message) {
		avatar = "fbk.jpg"
		client.user.setAvatar(avatar)
		client.user.setUsername("Shirakami Fubuki")
	}
};