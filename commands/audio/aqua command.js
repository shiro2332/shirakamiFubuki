const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'hololive',
            memberName: 'aqua',
            description: 'Commands available to Aqua',
        })
    }

    async run(message) {
        const { voice } = message.member
        const emoji = "<:aqua:779982662298632224> "
        const folderPath = '../../assets/song/aqua/'
        
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
        if (message.content.includes('forthewin') || message.content.includes('ftw')) 
            playAudio(folderPath + 'forthewin.mp3')

        else if (message.content.includes('iropalette')) 
            playAudio(folderPath + 'iropallete.mp3')

        else if (message.content.includes('trackmaker')) 
            playAudio(folderPath + 'indoortrackmaker.mp3')

        else if (message.content.includes('ubi')) 
            playAudio(folderPath + 'sao_ubi.mp3')
            
        else if (message.content.includes('dadada')) 
            playAudio(folderPath + 'dadada.mp3')

        //Weird Stuff
        else if (message.content.includes('noise'))
            playAudio(folderPath + 'aquanoise.mp3')

        else if (message.content.includes('help')) {
            message.channel.send(emoji
                + "Commands available to Aqua:\n"
                + "!!aqua help : Show commands available to Aqua\n"
                + "\nSongs:\n"
                + "!!aqua forthewin / ftw : Play For the Win\n"
                + "!!aqua iropalette : Play Iro Palette\n"
                + "!!aqua trackmaker : Play Indoor Track Maker\n"
                + "!!aqua ubi : Play Ubiquitous dB\n"
                + "!!aqua dadada : Play DaDaDa Tenshi\n"
                + "\nWeird Stuff:\n"
                + "!!aqua noise : Aqua noise\n"
            )
        }

        else if (message.content === "!!aqua") {
            if (!voice.channelID) {
                return
            }
            playAudio(folderPath + 'intro.mp3')
        }

        else {
            message.channel.send(emoji + "NEEEEEEEEEEEEEEEE")
        }
    }
}