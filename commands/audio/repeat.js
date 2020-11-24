const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'repeat',
            group: 'audio',
            memberName: 'repeat',
            description: 'loop(bug)',
        })
    }

    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
        }

        voice.channel.join().then((connection) => {
        	const dispatcher = connection.playStream(stream, streamOptions);
            dispatcher.on('end', () => { 
                play(connection);
            });
        })
    }
}