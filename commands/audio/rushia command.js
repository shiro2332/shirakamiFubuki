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
	    function playAudio(filepath){
	        if (!voice.channelID) {
	            message.reply('You must be in a voice channel')
	            return
	        }

	        voice.channel.join().then((connection) => {
	            connection.play(path.join(__dirname, filepath))
	        })
	    }

		//Songs
		if (message.content.includes('connect')){
	        playAudio('../../assets/song/rushia/Connect.mp3')  	
		}
		else if (message.content.includes('ghost')){
	        playAudio('../../assets/song/rushia/GhostInAFlower.mp3')  	
		}
		else if (message.content.includes('hello')){
	        playAudio('../../assets/song/rushia/HelloHowAreYou.mp3')  	
		}
		else if (message.content.includes('nandemonaiya')){
	        playAudio('../../assets/song/rushia/Nandemonaiya.mp3')  	
		}
		else if (message.content.includes('nanodesu remix')){
	        playAudio('../../assets/song/rushia/NanodesuRemix.mp3')  	
		}
		else if (message.content.includes('nanodesu song')){
	        playAudio('../../assets/song/rushia/NanodesuSong.mp3')  	
		}
		else if (message.content.includes('pon')){
			playAudio('../../assets/song/rushia/PonPonPon.mp3')  	
		}
		else if (message.content.includes('renai')){
	        playAudio('../../assets/song/rushia/RenaiCirculation.mp3')  	
		}
		else if (message.content.includes('magnet')){
	        playAudio('../../assets/song/marine/magnet.mp3')  	
	    }

		//Shitposts
		else if (message.content.includes('angery')){
	        playAudio('../../assets/song/rushia/RushiaAngery.mp3')  	
		}

	    else if (message.content.includes('help')){
	        message.channel.send(emoji
		        	+ "Commands available to Rushia:\n" 
					+ "!!rushia help : Show commands available to Rushia\n"
					+ "\nSongs:\n"
					+ "!!rushia connect : Play Connect (Madoka Magica)\n" 
					+ "!!rushia ghost : Play Ghost in a Flower\n" 
					+ "!!rushia hello : Play Hello, How are you?\n" 
					+ "!!rushia nandemonaiya : Play Nandemonaiya\n" 
					+ "!!rushia nanodesu remix : Play cute noises\n"
					+ "!!rushia nanodesu song : Play weird song\n" 
					+ "!!rushia pon : Play Pon Pon Pon\n"
					+ "!!rushia renai : Play Renai Circulation\n"
					+ "!!rushia magnet : Play Magnet"
					+ "\nWeird Stuff:\n"
					+ "!!rushia angery : Angery Rushia\n" 
		        	)
	    }

	    else if (message.content === "!!rushia"){
	        //empty
	    } 

	    else {
			message.channel.send(emoji + "Nanodesu?")
			if (!voice.channelID) {
	            return
	        }
	        playAudio('../../assets/song/rushia/Nanodesu.mp3') 
	    }
	}
}