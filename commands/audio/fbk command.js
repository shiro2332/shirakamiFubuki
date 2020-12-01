const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'fubuki',
            group: 'hololive',
            memberName: 'fubuki',
            description: 'Song commands available to Fubuki',
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

        else if (message.content.includes('sugar')){
            playAudio('../../assets/song/fubuki/sugarsong.mp3')
        }

        else if (message.content.includes('yoru')){
            playAudio('../../assets/song/fubuki/yoruSong.mp3')
        }

        else if (message.content.includes('polkka')){
            playAudio('../../assets/song/fubuki/polkka.mp3')
        }

        else if (message.content.includes('disappearance')){
            playAudio('../../assets/song/fubuki/disappearance.mp3')
        }

        else if (message.content.includes('countryroad')){
            playAudio('../../assets/song/fubuki/countryroad.mp3')
        }

        else if (message.content.includes('roku')){
            playAudio('../../assets/song/fubuki/rokuchounen.mp3')
        }

        else if (message.content === "!!fubuki"){
            var date = new Date();
            var currentMonth = date.getMonth();

            if(currentMonth >= 0 && currentMonth <= 2){
                //Spring (January to March)
                message.channel.send({files: ["./assets/images/spring.jpg"]});
                message.channel.send("Happy New Year~~~")
            }

            else if(currentMonth >= 3 && currentMonth <= 5){
                //Summer (April to June)
                message.channel.send({files: ["./assets/images/summer.png"]});
                message.channel.send("<:cha:775231692398788618>" 
                    + "<:ye:775231830689447976> ! " 
                    + "<:cha:775231692398788618>" 
                    + "<:ye:775231830689447976> ! " 
                    )
            }
            
            else if(currentMonth >= 6 && currentMonth <= 8){
                //Autumn (July to September)
                message.channel.send({files: ["./assets/images/autumn.jpg"]});
                message.channel.send(
                    "<:burgerfox:775231692352258068>" 
                    + " BURGER " 
                    + "<:burgerfox:775231692352258068>"
)
            }
            
            else if(currentMonth >= 9 && currentMonth <= 11){
                //Winter (October to December)
                message.channel.send({files: ["./assets/images/winter.jpg"]});
                message.channel.send(
                    "<:kon1:775231769758269441>" 
                    + " Warm tea and corn~ " 
                    + "<:tea1:775231830390996994>"
                    )
            }

            if (!voice.channelID) {
                return
            }
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
                + "!!fubuki sugar : Play Sugar Song to Bitter Step\n" 
                + "!!fubuki yoru : Play 夜に駆ける\n" 
                + "!!fubuki polkka : Play Levan Polkka\n"
                + "!!fubuki disappearance : Play Disappearance of Shirakami Fubuki\n"
                + "!!fubuki countryroad : Play Country Road\n"
                + "!!fubuki roku : Play Roku Chounen to Ichiya Monogatari\n"
        )}

        else {
            message.channel.send({files: ["./assets/images/confused.gif"]});
            if (!voice.channelID) {
                return
            }
            playAudio('../../assets/song/fubuki/error.mp3')
        }
    }
}
