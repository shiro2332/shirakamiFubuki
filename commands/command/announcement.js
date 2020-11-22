const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'announce',
			group: 'command',
			memberName: 'announce',
			description: 'announcement',
		});
	}

	run(message) {
		if(message.content.startsWith("!!announce")){
			if(message.member.hasPermission("Immortal")){
			message.delete();
			message.channel.send("__**ANNOUNCEMENT**__ \n \n ```apache\nTesting 1 2 3\n```")
			
			} else {
				message.channel.send("You do not have permission!!!")
			}
		}
	}
};