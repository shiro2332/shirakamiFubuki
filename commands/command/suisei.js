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

	async run(client, message) {
		var avatar = './suisei.png'
		user.setAvatar(avatar)
		user.setUsername("Hoshimachi Suisei")
	}
};