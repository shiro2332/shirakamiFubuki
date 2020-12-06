const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pekora',
            group: 'hololive',
            memberName: 'pekora',
            description: 'Commands available to Pekora',
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

        if (message.content.includes('ecchi')){
            playAudio('../../assets/song/pekora/ecchi.mp3')
        }
    }
}