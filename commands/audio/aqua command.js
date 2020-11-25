const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'aqua',
            group: 'hololive',
            memberName: 'aqua',
            description: 'Commands available to Aqua',
        })
    }

    async run(message) {
        const { voice } = message.member
        function playAudio(filepath){
            if (!voice.channelID) {
                message.reply('You must be in a voice channel')
                return
            }

            voice.channel.join().then((connection) => {
                connection.play(path.join(__dirname, filepath))
            })
        }

        if (message.content.includes('forthewin') || message.content.includes('ftw')){
          	playAudio('../../assets/song/aqua/forthewin.mp3')
        }

        else if (message.content.includes('iropalette')){
          	playAudio('../../assets/song/aqua/iropallete.mp3')
        }

        else if (message.content.includes('trackmaker')){
          	playAudio( '../../assets/song/aqua/indoortrackmaker.mp3')
        }

        else if (message.content.includes('ubi')){
            playAudio( '../../assets/song/aqua/sao_ubi.mp3')
        }

        else if (message.content.includes('noise')){
            playAudio( '../../assets/song/aqua/aquanoise.mp3')
        }

        else if (message.content.includes('dadada')){
            playAudio( '../../assets/song/aqua/dadada.mp3')
        }

        else if (message.content.includes('help')){
            message.channel.send("<:aqua:779982662298632224> " 
                + "Commands available to Aqua:\n"
                + "!!aqua help : Show commands available to Aqua\n" 
                + "!!aqua forthewin : Play For the Win\n" 
                + "!!aqua iropalette : Play Iro Palette\n" 
                + "!!aqua trackmaker : Play Indoor Track Maker\n"
                + "!!aqua ubi : Play Ubiquitous dB\n"
                + "!!aqua dadada : Play DaDaDa Tenshi\n"
                + "!!aqua noise : Aqua noise\n"
            )
        }

        else if (message.content === "!!aqua"){
            if (!voice.channelID) {
                return
            }
            playAudio( '../../assets/song/aqua/intro.mp3')
        } 

        else {
            message.channel.send("<:aqua:779982662298632224> " + "NEEEEEEEEEEEEEEEE")
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