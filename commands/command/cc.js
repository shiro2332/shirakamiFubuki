const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'cc',
			group: 'command',
			memberName: 'cc',
			description: 'Clear Channel',
		});
	}

	run(message) {
		if(message.member.hasPermission("Immortal")){
			message.channel.messages.fetch().then((results) =>{
				message.channel.bulkDelete(results)
			})
		}
	}
};