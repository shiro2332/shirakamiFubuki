const { Command } = require('discord.js-commando')
const emoji = require('./emoji.json')

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
			message.channel.delete(1000);
			message.channel.send("__**ANNOUNCEMENT**__ \n \n `Testing 1 2 3`")
			
			} else {
				message.channel.send("You do not have permission!!!")
			}
		}
	}
};