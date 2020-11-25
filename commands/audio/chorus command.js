const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'hololive',
            group: 'hololive',
            memberName: 'hololive',
            description: 'Hololive Command',
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

        if (message.content.includes('chorus')){
            playAudio('../../assets/song/chorus.mp3')   
        }

        else if (message.content.includes('smiley')){
            playAudio('../../assets/song/smiley.mp3')   
        }

        if (message.content.includes('alice')){
            playAudio('../../assets/song/suisei/alice.mp3')  	
        }

        else if (message.content.includes('saga')){
          	playAudio('../../assets/song/suisei/saga.mp3')
        }

        else if (message.content.includes('help')){
            message.channel.send("Commands available \n" 
                + "!!chorus help : Show available commands \n" 
                + "!!chorus chorus : Play Fukkireta Chorus\n" 
                + "!!chorus smiley : Play Shiny Smiley Story"
                + "!!chorus alice : Play Alice in N.Y.\n" 
                + "!!chorus saga : Play Saga Jihen"
                )
        }

        else {
        	message.channel.send("Error!!!")
        }
    }
}