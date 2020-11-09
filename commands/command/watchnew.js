const { Command } = require('discord.js-commando')
const client = new Command.CommandoClient({
	owner: "299176846132641792",
	commandPrefix: config.prefix
})

module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'watchnew',
			group: 'command',
			memberName: 'watchnew',
			description: 'Change livestream (status)',
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