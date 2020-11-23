const { Command } = require('discord.js-commando');
const { Discord } = require('discord.js');

module.exports = class EmbedCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dowat',
			group: 'command',
			memberName: 'dowat',
			description: 'What is Fubuki doing',
		});
	}

	async run(message) {
		const embed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setAuthor('Shirakami Fubuki')
			.setImage("./assets/images/chill.jpg")
			.setFooter("Boba Tea!!!");
		return message.channel.send(embed)
	}
};