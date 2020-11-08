const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'count',
			group: 'command',
			memberName: 'count',
			description: 'count to 10',
		});
	}

	run(message) {
		return message.channel.send("1 fox, 2 fox, 3 fox, FUBUKI! \n4 fox, 5 fox, 6 fox, FUBUKI! \n7 fox, 8 fox, 9 fox, FUBUKI! \n10 fox kawaii yooo..... \nJANG!")
	}
};