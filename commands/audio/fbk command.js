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
        //Change bot name
        var newNickname = "Shirakami Fubuki";
        message.guild.me.setNickname(newNickname).catch(console.error);

        const { guild } = message
        //Change bot role (Remove)
        var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
        for (i = 0; i < allrole.length; i++){
            const member = guild.members.cache.get("774870728285356083")
            member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
        }

        //Change bot role (Add)
        const rolename = "Fox Burger King"

        const member = guild.members.cache.get("774870728285356083")
        member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

        //Complete
        const emoji = client.emojis.cache.get("780332952151130113")
        msg.reply(`${ emoji }` + 'Hololive Gen 1/Gamers Shirakami Fubuki desu!');

        function playAudio(filepath){
            const { voice } = message.member

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
            const emoji = client.emojis.cache.get("780332952151130113")
            msg.reply(`${ emoji }` + 'Ya Be');
        }
    }
}
