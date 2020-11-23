const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'yoruduet',
            group: 'fbk_song',
            memberName: 'yoruduet',
            description: '夜に駆ける 黑白贴贴',
        })
    }

    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
        }

        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, '../../assets/song/shira_kuro_yoru.mp3'))
        })
    }
}