const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'aloe',
            group: 'hololive',
            memberName: 'aloe',
            description: 'Commands available to Aloe',
        })
    }

    async run(message) {
        const { voice } = message.member
        const emoji = "<:aloe:781917433023168574> "
        const folderPath = '../../assets/song/aloe/'

        function playAudio(filepath) {
            if (!voice.channelID) {
                message.reply('You must be in a voice channel')
                return
            }

            voice.channel.join().then((connection) => {
                connection.play(path.join(__dirname, filepath))
            })
        }

        //Songs
        if (message.content.includes('happy')) 
            playAudio(folderPath + 'HappySynthesizer.mp3')

        else if (message.content.includes('help')) {
            message.channel.send(emoji
                + "Commands available to Aloe:\n"
                + "!!aloe help : Show commands available to Aloe\n"
                + "\nSongs:\n"
                + "!!aloe happy: Play Happy Synthesizer\n"
            )
        }

        else if (message.content === "!!aloe") {
            //empty
        }

        else {
            message.channel.send(emoji + "Sumimasen Wakaranai~~")
        }
    }
}