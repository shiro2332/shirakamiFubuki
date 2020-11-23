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
  		//Change bot name
       	var newNickname = "Akai Haato";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
       	for (var i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Haachamachama"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply('<:haachama:779986363683569695> ' + 'Hololive Gen 1 Haachama chama!');

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

      	//Haachama Song

    	} 

    	else if (message.content.includes('senbonzakura')){
      		playAudio('../../assets/song/haachama/senbonzakura.mp3')
    	} 

    	else if (message.content.includes('shapeofyou')){
      		playAudio('../../assets/song/haachama/shapeofyou.mp3')
    	} 

    	else if (message.content.includes('natsumatsuri')){
      		playAudio('../../assets/song/haachama/natsumatsuri.mp3')
    	} 

    	else if (message.content.includes('help')){
      		message.channel.send('<:haachama:779986363683569695> ' + "Commands available to Haachama:\n!!haachama help : Show commands available to Haachama\n!!haachama cookpasta : Haachama Cooking Pasta Guide\n!!haachama senbonzakura : Play Senbonzakura\n!!haachama shapeofyou : Play Shape of You\n!!haachama natsumatsuri : Play Natsumatsuri")
    	}

    	else {
    		message.channel.send('<:haachama:779986363683569695> ' + "Commands available to Haachama:\n!!haachama help : Show commands available to Haachama\n!!haachama cookpasta : Haachama Cooking Pasta Guide\n!!haachama senbonzakura : Play Senbonzakura\n!!haachama shapeofyou : Play Shape of You\n!!haachama natsumatsuri : Play Natsumatsuri")
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