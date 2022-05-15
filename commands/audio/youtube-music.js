const ytdl = require('ytdl-core');
const path = require('path')
const information = require('./Information.json')
const Youtube = require('discord-youtube-api')
const youtube = new Youtube(information.APIKey.Youtube)
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
            message.reply('You must be in a voice channel')
            return
        }
        
        if (message.content.includes('https')){
            voice.channel.join().then((connection) => {
                connection.play(ytdl(args))
            })
        }
        
        if (message.content.includes('search')){
            query = message.content.replace('!!youtube search', '');
            const video = await youtube.searchVideos(query);
            voice.channel.join().then((connection) => {
                connection.play(ytdl(video))
            })
        }

    }
}
