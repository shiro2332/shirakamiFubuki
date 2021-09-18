const ytdl = require('ytdl-core');
const Commando = require('discord.js-commando')
const path = require('path')
 
module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
		super(client, {
			name: 'youtube',
			group: 'audio',
			memberName: 'youtube',
			description: 'Commands available to youtube',
		})
	}
    async run(message, args) {
        const { voice } = message.member
        console.log(args)
    
        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
        }

        voice.channel.join().then((connection) => {
            connection.play(ytdl(args[1]))
        })

    }
}
