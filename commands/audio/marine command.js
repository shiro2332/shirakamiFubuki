const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'marine',
      group: 'hololive',
      memberName: 'marine',
      description: 'Show commands available to Marine',
    })
  }

  async run(message) {
  	//Change bot name
   	var newNickname = "Houshou Marine";
   	message.guild.me.setNickname(newNickname).catch(console.error);

   	const { guild } = message
   	//Change bot role (Remove)
   	var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
   	for (var i = 0; i < allrole.length; i++){
   		const member = guild.members.cache.get("774870728285356083")
		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
   	}

   	//Change bot role (Add)
   	const rolename = "Houshou Pirates"

	const member = guild.members.cache.get("774870728285356083")
	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

	//Complete
   	message.reply('<:marine:779987488574930955> ' + 'Hololive Gen 3 Houshou Marine sanjo!');

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

    if (message.content.includes('ahoy')){
        playAudio('../../assets/song/marine/ahoy.mp3')  	
    }

    else if (message.content.includes('horny')){
        playAudio('../../assets/song/marine/imhorny.mp3')  	
    }

    else if (message.content.includes('help')){
        message.channel.send("<:marine:779987488574930955>" + "Commands available to Marine:\n!!marine help : Show commands available to Marine\n!!marine horny: Im Horny\n!!marine ahoy : Play Ahoy!")
    }

    else {
        message.channel.send("<:marine:779987488574930955>" + "Commands available to Marine:\n!!marine help : Show commands available to Marine\n!!marine horny: Im Horny\n!!marine ahoy : Play Ahoy!")
    }
  }
}

//Commands help
/**
Commands available to Marine:
!!marine help : Show commands available to Marine
!!marine horny: Im Horny
!!marine ahoy : Play Ahoy!

**/