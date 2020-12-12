const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'marine',
			group: 'hololive',
			memberName: 'marine',
			description: 'Commands available to Marine',
		})
	}

	async run(message) {
		const { voice } = message.member
		const emoji = "<:marine:779987488574930955> "
		const folderPath = '../../assets/song/marine/'

		function playAudio(filepath) {
			if (!voice.channelID) {
				message.reply('You must be in a voice channel')
				return
			}

			voice.channel.join().then((connection) => {
				connection.play(path.join(__dirname, filepath))
			})
		}

		//Songs
		if (message.content.includes('ahoy')) {
			playAudio(folderPath + 'ahoy.mp3')
		}
		else if (message.content.includes('magnet')) {
			playAudio(folderPath + 'Magnet.mp3')
		}

		//Weird Stuff
		else if (message.content.includes('horny')) {
			playAudio(folderPath + 'imhorny.mp3')
		}

		else if (message.content.includes('help')) {
			message.channel.send(emoji
				+ "Commands available to Marine:\n"
				+ "!!marine help : Show commands available to Marine\n"
				+ "\nSongs:\n"
				+ "!!marine ahoy : Play Ahoy!\n"
				+ "!!marine magnet : Play Magnet"
				+ "\nWeird Stuff:\n"
				+ "!!marine horny: Im Horny\n"
			)
		}

		else if (message.content === "!!marine") {
			//empty
		}

		else {
			message.channel.send(emoji + "Ara~ kore wa nandesu ka?")
			if (!voice.channelID) {
				return
			}
			playAudio(folderPath + 'marineLaugh.mp3')
		}
	}
}