const { Command } = require('discord.js-commando')
const client = Commando.CommandoClient()

module.exports = class BasicCommand extends Command {
	constructor(client) {
		this.client = client
		super(client, {
			name: 'fbk',
			group: 'command',
			memberName: 'fbk',
			description: 'Become fubuki',
		});
		var client = null;
	}

	async run(message) {
		//avatar = 'https://cdn.discordapp.com/attachments/778860853835464704/778866435731619860/fbk.jpg';
		client.user.setAvatar('https://cdn.discordapp.com/attachments/778860853835464704/778866435731619860/fbk.jpg')
		client.user.setUsername("Shirakami Fubuki")
	}
};