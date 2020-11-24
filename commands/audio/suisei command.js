const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'suisei',
            group: 'hololive',
            memberName: 'suisei',
            description: 'Show commands available to Suisei',
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

        if (message.content.includes('alice')){
            playAudio('../../assets/song/suisei/alice.mp3')  	
        }

        else if (message.content.includes('saga')){
          	playAudio('../../assets/song/suisei/saga.mp3')
        }

        else if (message.content.includes('help')){
            message.channel.send('<:suisei:779987500927811604> ' 
                + "Commands available to Suisei: \n" 
                + "!!suisei help : Show commands available to Suisei\n" 
                + "!!suisei alice : Play Alice in N.Y.\n" 
                + "!!suisei saga : Play Saga Jihen"
                )
        }

        else if (message.content === "!!suisei"){
            //empty
        } 

        else {
            message.channel.send('<:suisei:779987500927811604> ' + "Sui-chan wa kyou mo kawaii~~~~")
        }
    }
}

//Commands help
/**
Commands available to Suisei:
!!suisei help : Show commands available to Suisei
!!suisei alice : Play Alice in N.Y.
!!suisei saga : Play Saga Jihen

**/