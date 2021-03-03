const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'kanata',
			group: 'hololive',
			memberName: 'kanata',
			description: 'Commands available to Kanata',
		})
	}

	async run(message) {
		const { voice } = message.member
		const emoji = "<:kanata:782140207649521664> "
		const folderPath = '../../assets/song/kanata/'

		function playAudio(filepath) {
			if (!voice.channelID) {
				message.reply('You must be in a voice channel')
				return
			}

			voice.channel.join().then((connection) => {
				connection.play(path.join(__dirname, filepath))
			})
		}

		if (message.content.includes('chocolate'))
			playAudio('../../assets/song/watame/ChocolateBox.mp3')

		else if (message.content.includes('help')) {
			message.channel.send(emoji
				+ "Commands available to Kanata:\n"
				+ "!!kanata help : Show commands available to Kanata\n"
				+ "\nSongs:\n"
				+ "!!kanata chocolate : Play Chocolate Box"
			)
		}

		else if (message.content === "!!kanata") {
			//empty
		}

		else {
			message.channel.send(emoji + "Eh?")
		}
	}
}