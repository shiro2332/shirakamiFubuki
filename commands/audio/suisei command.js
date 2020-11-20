const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'suisei',
      group: 'audio',
      memberName: 'suisei',
      description: 'u',
    })
  }

  async run(message) {
    if (message.content.includes('!!suisei alice')){
      	const { voice } = message.member

      	if (!voice.channelID) {
        	message.reply('You must be in a voice channel')
        	return
      	}

      	voice.channel.join().then((connection) => {
        	connection.play(path.join(__dirname, '../../assets/song/suisei/alice.mp3'))
      	})

    }else if (message.content.includes('!!suisei saga')){
      	const { voice } = message.member

      	if (!voice.channelID) {
        	message.reply('You must be in a voice channel')
        	return
      	}

      	voice.channel.join().then((connection) => {
        	connection.play(path.join(__dirname, '../../assets/song/suisei/saga.mp3'))
      	})
    } else {
        message.reply {message.author.toString() + ", Unknown command. Use !! help or @Shirakami Fubuki#3337 help to view the command list."}
    }
  }
}