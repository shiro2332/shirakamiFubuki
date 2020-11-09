const { Command } = require('discord.js-commando')
const emoji = require('./emoji.json')

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
		return message.channel.send(":hamburger:" + emoji.cha)
	}
};