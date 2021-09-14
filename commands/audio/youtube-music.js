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
		if (args.length == 1) {
			oneArgumentCommand(message, args);
		}

		else if (args.length == 2) {
			twoArgumentCommand(message, args);
		}

		else {
			message.say(`Invalid argument. Use \`//youtube help\` to help you.`);
		}


    function oneArgumentCommand(message, args) {

    }

    function twoArgumentCommand(message, args) {
        if (args[0] === 'play') {
            const { voice } = message.member;
        
            if (!voice.channelID) {
                message.reply(`you must join a voice channel first.`);
                return;
            }
                
            voice.channel.join().then(connection => {
                const dispatcher = connection.play(ytdl(args[1]));
                dispatcher.on('end', end => {
                    voice.channel.leave();
                });
            });
        }
    }
}
}
