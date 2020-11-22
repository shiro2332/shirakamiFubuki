const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  	constructor(client) {
    	super(client, {
      	name: 'haachama',
      	group: 'hololive',
      	memberName: 'haachama',
      	description: 'haachama music & audio',
    	})
  	}

  	async run(message) {
  		function playAudio(filepath){
	        const { voice } = message.member

	        if (!voice.channelID) {
	            message.reply('You must be in a voice channel')
	            return
	        }

	        voice.channel.join().then((connection) => {
	            connection.play(path.join(__dirname, filepath))
	        })
    	}

    	if (message.content.includes('!!haachama cookpasta')){
    		message.channel.send("Haachama cooking in 60s.")
    		playAudio('../../assets/audio/hpasta1.mp3')

      	//Haachama Song

    	} 

    	else if (message.content.includes('!!haachama senbonzakura')){
      		playAudio('../../assets/song/haachama/senbonzakura.mp3')
    	} 

    	else if (message.content.includes('!!haachama shapeofyou')){
      		playAudio('../../assets/song/haachama/shapeofyou.mp3')
    	} 

    	else if (message.content.includes('!!haachama natsumatsuri')){
      		playAudio('../../assets/song/haachama/natsumatsuri.mp3')
    	} 

    	else if (message.content.includes('!!haachama help')){
      		message.channel.send("Commands available to Haachama:\n!!haachama help         = Show commands available to Haachama\n!!haachama cookpasta    = Haachama Cooking Pasta Guide\n!!haachama senbonzakura = Play Senbonzakura\n!!haachama shapeofyou   = Play Shape of You\n!!haachama natsumatsuri = Play Natsumatsuri")
    	}

    	else {
    		message.channel.send("Commands available to Haachama:\n!!haachama help         = Show commands available to Haachama\n!!haachama cookpasta    = Haachama Cooking Pasta Guide\n!!haachama senbonzakura = Play Senbonzakura\n!!haachama shapeofyou   = Play Shape of You\n!!haachama natsumatsuri = Play Natsumatsuri")
    	} 
    }
}	

//Commands help
/**
Commands available to Haachama:
!!haachama help         = Show commands available to Haachama
!!haachama cookpasta    = Haachama Cooking Pasta Guide
!!haachama senbonzakura = Play Senbonzakura
!!haachama shapeofyou   = Play Shape of You
!!haachama natsumatsuri = Play Natsumatsuri
**/