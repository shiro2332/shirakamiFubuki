const { Command } = require('discord.js-commando')
const { emoji } = require('./emoji.json')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hello',
			group: 'command',
			memberName: 'hello',
			description: 'Hi',
		});
	}

	run(message) {
		return message.channel.send('Hi friends ' + message.author.toString() + emoji.shira)
	}
};