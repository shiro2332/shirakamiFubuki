const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'suisei',
            group: 'hololive',
            memberName: 'suisei',
            description: 'Show commands available to Suisei',
        })
    }

    async run(message) {
        var newNickname = "Hoshimachi Suisei";
        msg.guild.me.setNickname(newNickname).catch(console.error);

        const { guild } = msg
        //Change bot role (Remove)
        var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
        for (i = 0; i < allrole.length; i++){
            const member = guild.members.cache.get("774870728285356083")
            member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
        }

        //Change bot role (Add)
        const rolename = "Comet"

        const member = guild.members.cache.get("774870728285356083")
        member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

        //Complete
        msg.reply('<:suisei:779987500927811604> ' + 'Hololive 2D Talent Hoshimachi Suisei!');

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

        if (message.content.includes('alice')){
            playAudio('../../assets/song/suisei/alice.mp3')  	
        }

        else if (message.content.includes('saga')){
          	playAudio('../../assets/song/suisei/saga.mp3')
        }

        else if (message.content.includes('help')){
            message.channel.send('<:suisei:779987500927811604> ' + "Commands available to Suisei: \n!!suisei help : Show commands available to Suisei\n!!suisei alice : Play Alice in N.Y.\n!!suisei saga : Play Saga Jihen")
        } 

        else {
            message.channel.send('<:suisei:779987500927811604> ' + "Commands available to Suisei: \n!!suisei help : Show commands available to Suisei\n!!suisei alice : Play Alice in N.Y.\n!!suisei saga : Play Saga Jihen")
        }
    }
}

//Commands help
/**
Commands available to Suisei:
!!suisei help : Show commands available to Suisei
!!suisei alice : Play Alice in N.Y.
!!suisei saga : Play Saga Jihen

**/