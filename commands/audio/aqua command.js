const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'aqua',
      group: 'audio',
      memberName: 'aqua',
      description: 'aqua music',
    })
  }

  async run(message) {
    if (message.content.includes('!!aqua forthewin')){
      	const { voice } = message.member

      	if (!voice.channelID) {
        	message.reply('You must be in a voice channel')
        	return
      	}

      	voice.channel.join().then((connection) => {
        	connection.play(path.join(__dirname, '../../assets/song/aqua/forthewin.mp3'))
      	})

    }

    else if (message.content.includes('!!aqua iropalette')){
      	const { voice } = message.member

      	if (!voice.channelID) {
        	message.reply('You must be in a voice channel')
        	return
      	}

      	voice.channel.join().then((connection) => {
        	connection.play(path.join(__dirname, '../../assets/song/aqua/iropallete.mp3'))
      	})
    }

    else if (message.content.includes('!!aqua trackmaker')){
      	const { voice } = message.member

      	if (!voice.channelID) {
        	message.reply('You must be in a voice channel')
        	return
      	}

      	voice.channel.join().then((connection) => {
        	connection.play(path.join(__dirname, '../../assets/song/aqua/indoortrackmaker.mp3'))
      	})
    }
  }
}