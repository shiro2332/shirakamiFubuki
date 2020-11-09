const { Command } = require('discord.js-commando')
const Discord = require('discord.js')
const client = new Discord.Client();


module.exports = class BasicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'watchnew',
			group: 'command',
			memberName: 'watchnew',
			description: 'Change livestream (status) (Have prob)',
		});
	}

	run(message) {
		if(message.member.hasPermission("Immortal")){
			message.channel.send('Received')
			client.on("ready", async () => {
				var livelist = Array("フブキCh。白上フブキ", "Botan Ch.獅白ぼたん", "Suisei Channel", "Korone Ch. 戌神ころね")
				var live = livelist[Math.floor(Math.random() * livelist.length)]

				client.user.setActivity(live,{ type: 'WATCHING'})
				message.channel.send('Changed to WATCHING' + live)
			});
			
		}
	}
};