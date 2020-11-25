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

    	if (message.content.includes('cookpasta')){
    		message.channel.send("Haachama cooking in 60s.")
    		playAudio('../../assets/audio/hpasta1.mp3')
    	}

    	if (message.content.includes('cookgyoza')){
    		message.channel.send("Haachama cooking in 60s.")
    		playAudio('../../assets/audio/hgyoza.mp3')
    	}

    	if (message.content.includes('cookcurry')){
    		message.channel.send("Haachama cooking in 60s.")
    		playAudio('../../assets/audio/hcurry.mp3')
    	}

      	//Haachama Song

    	else if (message.content.includes('senbonzakura')){
      		playAudio('../../assets/song/haachama/senbonzakura.mp3')
    	} 

    	else if (message.content.includes('shapeofyou')){
      		playAudio('../../assets/song/haachama/shapeofyou.mp3')
    	} 

    	else if (message.content.includes('natsumatsuri')){
      		playAudio('../../assets/song/haachama/natsumatsuri.mp3')
    	} 

    	else if (message.content.includes('polkka')){
      		playAudio('../../assets/song/haachama/polka.mp3')
    	} 

    	else if (message.content.includes('help')){
      		message.channel.send('<:haachama:779986363683569695> ' 
      			+ "Commands available to Haachama:\n" 
      			+ "!!haachama help : Show commands available to Haachama\n" 
      			+ "!!haachama cookpasta : Haachama Cooking Pasta Guide\n"
      			+ "!!haachama cookgyoza : Haachama Cooking Gyoza Guide\n" 
      			+ "!!haachama cookcurry : Haachama Cooking Curry Guide\n"  
      			+ "!!haachama senbonzakura : Play Senbonzakura\n" 
      			+ "!!haachama shapeofyou : Play Shape of You\n" 
      			+ "!!haachama natsumatsuri : Play Natsumatsuri"
      			)
    	}

    	else if (message.content === "!!haachama"){
            //empty
        } 

    	else {
    		message.channel.send('<:haachama:779986363683569695> ' + "HAACHAMACHAMA~~~!!!")
    	} 
    }
}	

//Commands help
/**
Commands available to Haachama:
!!haachama help : Show commands available to Haachama
!!haachama cookpasta : Haachama Cooking Pasta Guide
!!haachama senbonzakura : Play Senbonzakura
!!haachama shapeofyou : Play Shape of You
!!haachama natsumatsuri : Play Natsumatsuri
**/