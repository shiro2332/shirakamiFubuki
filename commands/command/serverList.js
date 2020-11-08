const { Command } = require('discord.js-commando')

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'serverList',
			group: 'command',
			memberName: 'serverList',
			description: 'List online player',
		});
	}

	run(message) {
		client.guilds.cache.forEach((guild) => {
			message.channel.send(`${guild.name} has a total of ${guild.memberCount} people.`)
		})
	}
};