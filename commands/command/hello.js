const { Command } = require('discord.js-commando')
const emoji = require('./emoji.json')

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
		message.channel.send(emoji.cha + emoji.ye)
		return message.channel.send(emoji.shira + ' ' + message.author.toString() + ' ' + 'Hi friends, tea!!' + ' ' + emoji.cha + ' ' + emoji.ye)

	}
};