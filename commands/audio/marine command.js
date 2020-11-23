const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'marine',
      group: 'hololive',
      memberName: 'marine',
      description: 'Show commands available to Marine',
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

    if (message.content.includes('ahoy')){
        playAudio('../../assets/song/marine/ahoy.mp3')  	
    }

    else if (message.content.includes('horny')){
        playAudio('../../assets/song/marine/imhorny.mp3')  	
    }

    else if (message.content.includes('help')){
        message.channel.send("<:marine:779987488574930955>" + "Commands available to Marine:\n!!marine help : Show commands available to Marine\n!!marine horny: Im Horny\n!!marine ahoy : Play Ahoy!")
    }

    else if (message.content === "!!marine"){
        //empty
    } 

    else {
        message.channel.send("<:marine:779987488574930955>" + "Commands available to Marine:\n!!marine help : Show commands available to Marine\n!!marine horny: Im Horny\n!!marine ahoy : Play Ahoy!")
    }
  }
}

//Commands help
/**
Commands available to Marine:
!!marine help : Show commands available to Marine
!!marine horny: Im Horny
!!marine ahoy : Play Ahoy!

**/