const Commando = require('discord.js-commando')
const path = require('path')
const index = require('../../index.js')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    	super(client, {
      		name: 'henshin',
      		group: 'hololive',
      		memberName: 'henshin',
      		description: 'Show commands available to hololive',
    	})
  }

  	async run(message) {
	    
      	if (message.content.includes('fubuki')){
        	message.reply("Akutan")
      	}

      	else if (message.content.includes('suisei')){
  			message.reply("Akutan")
      	}

      	else if (message.content.includes('aqua')){
  			message.reply("Akutan")
      	}

      	else if (message.content.includes('help')){
         	 message.channel.send("<:aqua:779982662298632224> " + "Commands available to Aqua:\n!!aqua help : Show commands available to Aqua\n!!aqua forthewin : Play For the Win\n!!aqua iropalette : Play Iro Palette\n!!aqua trackmaker : Play Indoor Track Maker")
      	}

      	else {
          	message.channel.send("<:aqua:779982662298632224> " + "Commands available to Aqua:\n!!aqua help : Show commands available to Aqua\n!!aqua forthewin : Play For the Win\n!!aqua iropalette : Play Iro Palette\n!!aqua trackmaker : Play Indoor Track Maker")
      	}
    }
}

//Commands help
/**
Commands available to Aqua:
!!henshin

**/