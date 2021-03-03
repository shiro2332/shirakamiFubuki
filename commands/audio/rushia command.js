const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'rushia',
			group: 'hololive',
			memberName: 'rushia',
			description: 'Commands available to Rushia',
		})
	}

	async run(message) {
		const { voice } = message.member
		const emoji = "<:rushia:779987468622495754> "
		const folderPath = '../../assets/song/rushia/'

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
		if (message.content.includes('connect'))
			playAudio(folderPath + 'Connect.mp3')

		else if (message.content.includes('ghost'))
			playAudio(folderPath + 'GhostInAFlower.mp3')

		else if (message.content.includes('hello'))
			playAudio(folderPath + 'HelloHowAreYou.mp3')

		else if (message.content.includes('nandemonaiya'))
			playAudio(folderPath + 'Nandemonaiya.mp3')

		else if (message.content.includes('pon'))
			playAudio(folderPath + 'PonPonPon.mp3')

		else if (message.content.includes('renai'))
			playAudio(folderPath + 'RenaiCirculation.mp3')

		else if (message.content.includes('magnet'))
			playAudio('../../assets/song/marine/Magnet.mp3')

		//Weird Stuff
		else if (message.content.includes('angery')) {
			playAudio(folderPath + 'RushiaAngery.mp3')
		}
		else if (message.content.includes('nanodesu remix')) {
			playAudio(folderPath + 'NanodesuRemix.mp3')
		}
		else if (message.content.includes('nanodesu song')) {
			playAudio(folderPath + 'NanodesuSong.mp3')
		}
		else if (message.content.includes('yo yo')) {
			playAudio(folderPath + 'RushiaYo.mp3')
		}

		else if (message.content.includes('help')) {
			message.channel.send(emoji
				+ "Commands available to Rushia:\n"
				+ "!!rushia help : Show commands available to Rushia\n"
				+ "\nSongs:\n"
				+ "!!rushia connect : Play Connect (Madoka Magica)\n"
				+ "!!rushia ghost : Play Ghost in a Flower\n"
				+ "!!rushia hello : Play Hello, How are you?\n"
				+ "!!rushia nandemonaiya : Play Nandemonaiya\n"
				+ "!!rushia pon : Play Pon Pon Pon\n"
				+ "!!rushia renai : Play Renai Circulation\n"
				+ "!!rushia magnet : Play Magnet\n"
				+ "\nWeird Stuff:\n"
				+ "!!rushia angery : Angery Rushia\n"
				+ "!!rushia nanodesu remix : Play cute noises\n"
				+ "!!rushia nanodesu song : Play weird song\n"
			)
		}

		else if (message.content === "!!rushia") {
			//empty
		}

		else {
			message.channel.send(emoji + "Nanodesu?")
			if (!voice.channelID) {
				return
			}
			playAudio(folderPath + 'Nanodesu.mp3')
		}
	}
}