const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'yabe',
            group: 'audio',
            memberName: 'yabe',
            description: 'Hunt for people',
        })
    }

    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
        }

        voice.channel.join().then((connection) => {
            message.channel.send("Looking for " + message.author.toString())
            connection.play(path.join(__dirname, '../../assets/audio/yabe.mp3'))
        })
    }
}