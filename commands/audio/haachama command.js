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
    	if (message.content.includes('!!haachama cookpasta')){
      		const { voice } = message.member

      		if (!voice.channelID) {
        		message.reply('You must be in a voice channel')
        		return
      		}

      		voice.channel.join().then((connection) => {
      			message.channel.send("Haachama cooking in 60s.")
      			connection.play(path.join(__dirname, '../../assets/audio/hpasta1.mp3'))
      		})

      	//Haachama Song

    	} else if (message.content.includes('!!haachama senbonzakura')){
      		const { voice } = message.member

      		if (!voice.channelID) {
        		message.reply('You must be in a voice channel')
        		return
      		}

      		voice.channel.join().then((connection) => {
      			connection.play(path.join(__dirname, '../../assets/song/haachama/senbonzakura.mp3'))
      		})
    	} else if (message.content.includes('!!haachama shapeofyou')){
      		const { voice } = message.member

      		if (!voice.channelID) {
        		message.reply('You must be in a voice channel')
        		return
      		}

      		voice.channel.join().then((connection) => {
      			connection.play(path.join(__dirname, '../../assets/song/haachama/shapeofyou.mp3'))
      		})

    	} else if (message.content.includes('!!haachama natsumatsuri')){
      		const { voice } = message.member

      		if (!voice.channelID) {
        		message.reply('You must be in a voice channel')
        		return
      		}

      		voice.channel.join().then((connection) => {
      			connection.play(path.join(__dirname, '../../assets/song/haachama/natsumatsuri.mp3'))
      		})

    	} else {
    		message.reply {message.author.toString() + ", Unknown command. Use !! help or @Shirakami Fubuki#3337 help to view the command list."}
    	}
    }
}	
