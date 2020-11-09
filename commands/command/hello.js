const { Command } = require('discord.js-commando')

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
		return message.channel.send('Hi friends ' + message.author.toString() + ' <:shira:775194767247409163>')
	}
};