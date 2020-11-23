const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'henshin',
      group: 'hololive',
      memberName: 'henshin',
      description: 'Show commands available to hololive',
    })
  }

  async run(message) {
    // function playAudio(filepath){
    //     const { voice } = message.member

    //     if (!voice.channelID) {
    //         message.reply('You must be in a voice channel')
    //         return
    //     }

    //     voice.channel.join().then((connection) => {
    //         connection.play(path.join(__dirname, filepath))
    //     })
	// }
	
	function henshin(nickname, rolename, emojiId, intro){
		//Change bot name
		var newNickname = nickname;
		msg.guild.me.setNickname(newNickname).catch(console.error);

		const { guild } = msg
		//Change bot role (Remove)
		var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
		for (i = 0; i < allrole.length; i++){
			const member = guild.members.cache.get("774870728285356083")
		 	member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
		}

		//Change bot role (Add)
		const newRolename = rolename

		const member = guild.members.cache.get("774870728285356083")
		member.roles.add(guild.roles.cache.find((role) => {return role.name === newRolename}))

		//Complete
		const emoji = client.emojis.cache.get(emojiId)
			msg.reply(`${ emoji }` + intro);
	}

    if (message.content.includes('fubuki')){
      	henshin("Shirakami Fubuki", "Fox Burger King", "780332952151130113", 'Hololive Gen 1/Gamers Shirakami Fubuki desu!')
    }

    else if (message.content.includes('suisei')){
		henshin("Hoshimachi Suisei", "Comet", "779987500927811604", 'Hololive 2D Talent Hoshimachi Suisei!')
    }

    else if (message.content.includes('aqua')){
		henshin("Minato Aqua", "Akukin", "779987500927811604", 'Hololive Gen 2 Minato Aqua desu!')
    }

    else if (message.content.includes('help')){
        message.channel.send("<:aqua:779982662298632224> " + "Commands available to Aqua:\n!!aqua help : Show commands available to Aqua\n!!aqua forthewin : Play For the Win\n!!aqua iropalette : Play Iro Palette\n!!aqua trackmaker : Play Indoor Track Maker")
    }

    else {
        message.channel.send("<:aqua:779982662298632224> " + "Commands available to Aqua:\n!!aqua help : Show commands available to Aqua\n!!aqua forthewin : Play For the Win\n!!aqua iropalette : Play Iro Palette\n!!aqua trackmaker : Play Indoor Track Maker")
    }
  }
}

//Commands help
/**
Commands available to Aqua:
!!henshin

**/