const { Command } = require('discord.js-commando')
const client = Commando.CommandoClient()

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'serverlist',
			group: 'command',
			memberName: 'serverlist',
			description: 'List online player (DO NOT USE, HAVE PROBLEM)',
		});
	}

	run(message) {
		client.guilds.cache.forEach((guild) => {
			message.channel.send(`${guild.name} has a total of ${guild.memberCount} people.`)
		})
	}
};