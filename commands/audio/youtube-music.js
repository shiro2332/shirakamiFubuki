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
    
        if (!voice.channelID) {
            message.reply(`you must join a voice channel first.`);
            return;
        }
            
        voice.channel.join().then(connection => {
            const dispatcher = connection.play(ytdl(args[0]));
            dispatcher.on('end', end => {
                voice.channel.leave();
            });
        });

    }
}
