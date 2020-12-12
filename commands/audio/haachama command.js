const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'haachama',
			group: 'hololive',
			memberName: 'haachama',
			description: 'Commands available to Haachama',
		})
	}

	async run(message) {
		const { voice } = message.member
		const emoji = '<:haachama:779986363683569695> '
		const folderPath = '../../assets/song/haachama/'

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
		if (message.content.includes('senbonzakura'))
			playAudio(folderPath + 'senbonzakura.mp3')

		else if (message.content.includes('shapeofyou'))
			playAudio(folderPath + 'shapeofyou.mp3')

		else if (message.content.includes('natsumatsuri'))
			playAudio(folderPath + 'natsumatsuri.mp3')

		else if (message.content.includes('polkka'))
			playAudio(folderPath + 'polka.mp3')

		else if (message.content.includes('takemehome'))
			playAudio(folderPath + 'takemehome.mp3')

		//Haachama Cooking
		else if (message.content.includes('cookpasta')) {
			message.channel.send("Haachama cooking in 60s.")
			playAudio('../../assets/audio/hpasta1.mp3')
		}
		if (message.content.includes('cookgyoza')) {
			message.channel.send("Haachama cooking in 60s.")
			playAudio('../../assets/audio/hgyoza.mp3')
		}
		if (message.content.includes('cookcurry')) {
			message.channel.send("Haachama cooking in 60s.")
			playAudio('../../assets/audio/hcurry.mp3')
		}

		else if (message.content.includes('help')) {
			message.channel.send(emoji
				+ "Commands available to Haachama:\n"
				+ "!!haachama help : Show commands available to Haachama\n"
				+ "\nSongs:\n"
				+ "!!haachama senbonzakura : Play Senbonzakura\n"
				+ "!!haachama shapeofyou : Play Shape of You\n"
				+ "!!haachama natsumatsuri : Play Natsumatsuri\n"
				+ "!!haachama takemehome : Play Take me Home\n"
				+ "\nCookings:\n"
				+ "!!haachama cookpasta : Haachama Cooking Pasta Guide\n"
				+ "!!haachama cookgyoza : Haachama Cooking Gyoza Guide\n"
				+ "!!haachama cookcurry : Haachama Cooking Curry Guide\n"
			)
		}

		else if (message.content === "!!haachama") {
			//empty
		}

		else {
			message.channel.send(emoji + "HAACHAMACHAMA~~~!!!")
		}
	}
}