const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'cc',
			group: 'admin_command',
			memberName: 'cc',
			description: 'Clear channel',
		});
	}

	run(message) {
		if(message.member.hasPermission("Immortal")){
			message.channel.messages.fetch().then((results) =>{
				message.channel.bulkDelete(results)
			})
		} else {
			message.channel.send("You do not have permission!!!")
		}
	}
};