const { Command } = require('discord.js-commando')
const js = require('discord.js')

const client = new js.Client()

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
		client.user.setAvatar(avatar)
		client.user.setUsername("Hoshimachi Suisei")
	}
};