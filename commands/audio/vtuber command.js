const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class VtuberCommand extends Commando.Command {
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

        function playAudio(filepath) {
            if (!voice.channelID) {
                message.reply('You must be in a voice channel')
                return
            }
        
            voice.channel.join().then((connection) => {
                connection.play(path.join(__dirname, filepath))
            })
        }
    }
}