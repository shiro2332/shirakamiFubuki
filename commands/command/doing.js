const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

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
		const attachment = new Discord.MessageAttachment("./assets/images/chill.jpg", 'chill.png');
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setAuthor('Shirakami Fubuki')
			.attachFile(attachment)
			.setImage('attachment://chill.png')
			.setFooter("Boba Tea!!!");
		return message.channel.send(embed)
	}
};