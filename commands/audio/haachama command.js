const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'haachama',
      group: 'audio',
      memberName: 'haachama',
      description: 'u',
    })
  }

  async run(message) {
    if (message.content.includes('!!haachama cook pasta')){
      	const { voice } = message.member

      	if (!voice.channelID) {
        	message.reply('You must be in a voice channel')
        	return
      	}

      	voice.channel.join().then((connection) => {
          connection.play(path.join(__dirname, '../../assets/audio/haachama.mp3'))
          msg.reply("Haachama cooking in 60s.")
        	connection.play(path.join(__dirname, '../../assets/audio/hpasta1.mp3'))
          voice.channel.leave()
      	})
  }
}