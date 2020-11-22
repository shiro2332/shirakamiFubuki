const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'aqua',
      group: 'hololive',
      memberName: 'aqua',
      description: 'Show commands available to Aqua',
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

    if (message.content.includes('!!aqua forthewin')){
      	playAudio('../../assets/song/aqua/forthewin.mp3')

    }

    else if (message.content.includes('!!aqua iropalette')){
      	playAudio('../../assets/song/aqua/iropallete.mp3')
    }

    else if (message.content.includes('!!aqua trackmaker')){
      	playAudio( '../../assets/song/aqua/indoortrackmaker.mp3')
    }

    else if (message.content.includes('!!aqua help')){
        message.channel.send("<:aqua:779982662298632224> " + "Commands available to Aqua:\n!!aqua help : Show commands available to Aqua\n!!aqua forthewin : Play For the Win\n!!aqua iropalette : Play Iro Pallete\n!!aqua trackmaker : Play Indoor Track Maker")
    }

    else {
        message.channel.send("<:aqua:779982662298632224> " + "Commands available to Aqua:\n!!aqua help : Show commands available to Aqua\n!!aqua forthewin : Play For the Win\n!!aqua iropalette : Play Iro Pallete\n!!aqua trackmaker : Play Indoor Track Maker")
    }
  }
}

//Commands help
/**
Commands available to Aqua:
!!aqua help : Show commands available to Aqua
!!aqua forthewin : Play For the Win
!!aqua iropalette : Play Iro Pallete
!!aqua trackmaker : Play Indoor Track Maker

**/