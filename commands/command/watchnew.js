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
			var livelist = Array("フブキCh。白上フブキ", "Botan Ch.獅白ぼたん", "Suisei Channel", "Korone Ch. 戌神ころね")
			var live = livelist[Math.floor(Math.random() * livelist.length)]

			client.user.setActivity(live,{ type: 'WATCHING'})
		}
	}
};