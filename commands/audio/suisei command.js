const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'suisei',
            group: 'hololive',
            memberName: 'suisei',
            description: 'Commands available to Suisei',
        })
    }

    async run(message) {
        const { voice } = message.member
        const emoji = '<:suisei:779987500927811604> '
        const folderPath = '../../assets/song/suisei/'

        function playAudio(filepath) {

            if (!voice.channelID) {
                message.reply('You must be in a voice channel')
                return
            }

            voice.channel.join().then((connection) => {
                connection.play(path.join(__dirname, filepath))
            })
        }
        
        if (message.content.includes('tenkyuu'))
            playAudio(folderPath + 'tenkyuu.mp3')

        else if (message.content.includes('nextcolor'))
            playAudio(folderPath + 'nextcolor.mp3')

        else if (message.content.includes('kakusei'))
            playAudio(folderPath + 'superfly.mp3')

        else if (message.content.includes('comet'))
            playAudio(folderPath + 'comet.mp3')

        else if (message.content.includes('idolm'))
            playAudio(folderPath + 'idolm.mp3')

        else if (message.content.includes('sugarsong'))
            playAudio(folderPath + 'sugarsong.mp3')

        else if (message.content.includes('help')) {
            message.channel.send(emoji
                + "Commands available to Suisei: \n"
                + "!!suisei help : Show commands available to Suisei\n"
                + "\nSongs:\n"
                + "!!suisei tenkyuu : Play 天球、彗星は夜を跨いで \n"
                + "!!suisei nextcolor : Play NEXT COLOR PLANET\n"
                + "!!suisei kakusei : Play 觉醒\n"
                + "!!suisei comet : Play comet\n"
                + "!!suisei idolm : Play idolm\n"
                + "!!suisei sugarsong : Play Sugar Song to Bitter Step\n"
            )
        }

        else if (message.content === "!!suisei") {
            //empty
        }

        else {
            message.channel.send(emoji + "Sui-chan wa kyou mo kawaii~~~~")
        }
    }
}