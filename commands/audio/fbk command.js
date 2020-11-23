const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'fubuki',
            group: 'hololive',
            memberName: 'fubuki',
            description: 'Show song commands available to Fubuki',
        })
    }

    async run(message) {
        const { voice } = message.member

        function playAudio(filepath){
            if (!voice.channelID) {
                message.reply('You must be in a voice channel')
                return
            }

            voice.channel.join().then((connection) => {
                connection.play(path.join(__dirname, filepath))
            })
        }

        if (message.content.includes('asa')){
          	playAudio('../../assets/song/fubuki/asa.mp3')
        }

        else if (message.content.includes('skr')){
            playAudio('../../assets/song/fubuki/fbkskrillex.mp3')
        }

        else if (message.content.includes('gogo')){
            playAudio('../../assets/song/fubuki/gogomaniac.mp3')
        }

        else if (message.content.includes('pizza')){
            playAudio('../../assets/song/fubuki/pizza.mp3')
        }

        else if (message.content.includes('platinum')){
            playAudio('../../assets/song/fubuki/platinum.mp3')
        }

        else if (message.content.includes('scatman')){
            playAudio('../../assets/song/fubuki/scatman.mp3')
        }

        else if (message.content.includes('yoruduet')){
            playAudio('../../assets/song/fubuki/shira_kuro_yoru.mp3')
        }

        else if (message.content.includes('sugarsong')){
            playAudio('../../assets/song/fubuki/sugarsong.mp3')
        }

        else if (message.content.includes('yoru')){
            playAudio('../../assets/song/fubuki/yoruSong.mp3')
        }

        else if (message.content === "!!fubuki"){
            playAudio('../../assets/audio/fbkintro.mp3')
        } 

        else if (message.content.includes('help')){
            message.channel.send("<:shira:775231808273907712> "
                + "Commands available to Fubuki:\n" 
                + "!!fubuki help : Show commands available to Fubuki\n"
                + "!!fubuki asa : Play Asa Ga Kite\n" 
                + "!!fubuki skr : Play First of the Year\n" 
                + "!!fubuki gogo : Play Go!Go!Maniac!\n" 
                + "!!fubuki pizza : Play Pizza Pasta \n" 
                + "!!fubuki platinum : Play Platinum Disco\n" 
                + "!!fubuki scatman : Play Scatman\n" 
                + "!!fubuki yoruduet : Play 夜に駆ける 黑白贴贴\n" 
                + "!!fubuki sugarsong : Play Sugar Song to Bitter Step\n" 
                + "!!fubuki Yoru : Play 夜に駆ける" 
        )}

        else {
            message.reply("<:shira:775231808273907712> " + 'Ya Be');
            if (!voice.channelID) {
                return
            }
            playAudio('../../assets/song/fubuki/error.mp3')
        }
    }
}
