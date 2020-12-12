const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'watame',
			group: 'hololive',
			memberName: 'watame',
			description: 'Commands available to Watame',
		})
	}

	async run(message) {
		const { voice } = message.member
		const emoji = "<:watame_smile:782136270045970432> "
		const folderPath = '../../assets/song/watame/'

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
		if (message.content.includes('introsong'))
			playAudio(folderPath + 'WatameIntroductionSong.mp3')

		else if (message.content.includes('aimai'))
			playAudio(folderPath + 'AimaiChocolate.mp3')

		else if (message.content.includes('bubble'))
			playAudio(folderPath + 'BubbleLove.mp3')

		else if (message.content.includes('sayholo'))
			playAudio(folderPath + 'CanYouSayHololive.mp3')

		else if (message.content.includes('chocolate'))
			playAudio(folderPath + 'ChocolateBox.mp3')

		else if (message.content.includes('count'))
			playAudio(folderPath + 'SheepCountingSong.mp3')

		else if (message.content.includes('kojo'))
			playAudio(folderPath + 'WatameKojo.mp3')

		else if (message.content.includes('rap'))
			playAudio(folderPath + 'WatameRap.mp3')

		else if (message.content.includes('melancholic'))
			playAudio(folderPath + 'Melancholic.mp3')

		//Shitposts
		else if (message.content.includes('internet'))
			playAudio(folderPath + 'I_fixed_my_internet.mp3')

		else if (message.content.includes('help')) {
			message.channel.send(emoji
				+ "Commands available to Watame:\n"
				+ "!!watame help : Show commands available to Watame\n"
				+ "\nSongs:\n"
				+ "!!watame introsong : Play Watame's Introduction Song\n"
				+ "!!watame aimai : Play Ai-mai Chocolate\n"
				+ "!!watame bubble : Play Bubble Love\n"
				+ "!!watame sayholo : Play \'Can You Say Hololive?\'\n"
				+ "!!watame chocolate : Play Chocolate Box\n"
				+ "!!watame count : Play Sheep Counting Song\n"
				+ "!!watame kojo : Play Watame Kojo\n"
				+ "!!watame rap : Play Watame Rap\n"
				+ "!!watame melancholic : Play Melancholic\n"
				+ "\nShitposts:\n"
				+ "!!watame internet : Watame tries to prove that her internet is ok\n"
			)
		}

		else if (message.content === "!!watame") {
			//empty
		}

		else {
			message.channel.send(emoji + "Warukunai yo ne~~?")
			if (!voice.channelID) {
				return
			}
			playAudio(folderPath + 'WarukunaiYoNe.mp3')
		}
	}
}