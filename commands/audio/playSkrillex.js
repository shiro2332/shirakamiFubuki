const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  	constructor(client) {
    	super(client, {
      		name: 'skrillex',
      		group: 'fbk_song',
      		memberName: 'skrillex',
      	description: 'First of the Year',
    	})
  	}

  	async run(message) {
    	const { voice } = message.member

    	if (!voice.channelID) {
      		message.reply('You must be in a voice channel')
      		return
    	}

    	voice.channel.join().then((connection) => {
      		connection.play(path.join(__dirname, '../../assets/song/fbkskrillex.mp3'))
    	})
  	}
}

