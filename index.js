const Commando = require('discord.js-commando')
const config = require('./config.json')

const path = require('path')
const command = require('./command')

const client = new Commando.CommandoClient({
	owner: "299176846132641792",
	commandPrefix: config.prefix,
	unknownCommandResponse: false
})

//Run this when the bot is startup
client.on('ready', async () => {
	console.log("==================================")
	console.log("|Client is ready!                |")
	console.log("|Logged in as Shirakami Fubuki!  |")
	console.log("==================================")

	client.registry
	.registerGroups([
		['audio', 'Audio command'],
		['fbk_song', 'Fubuki Song command'],
		['hololive', 'Hololive command'],
		['command', 'Basic command'],
		['commander', 'Commander command'],
		['admin_command', 'Admin command'],
		['util', 'Utilities command'],
		])
	//.registerDefaults()
	.registerCommandsIn(path.join(__dirname, "commands"))

	//Random a status
	setInterval(function() {
		var livelist = Array("フブキCh。白上フブキ", "Botan Ch.獅白ぼたん", "Suisei Channel", "Korone Ch. 戌神ころね", "Aqua Ch. 湊あくあ", "Nakiri Ayame Ch. 百鬼あやめ", "Okayu Ch. 猫又おかゆ", "Mio Channel 大神ミオ", "Pekora Ch. 兎田ぺこら", "Marine Ch. 宝鐘マリン")
		var live = livelist[Math.floor(Math.random() * livelist.length)]
        
        client.user.setActivity(live,{ type: 'WATCHING'})
    }, 100000)
})

//Commands that does not works with discord commando or commands that does not use prefix
client.on('message', message => {
	function henshin(nickname, rolename, emojiId, intro){
		if (message.guild.me.displayName != nickname){
			//Change bot name
			var newNickname = nickname;
			message.guild.me.setNickname(newNickname).catch(console.error);

			const { guild } = message
			//Change bot role (Remove)
			var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
			for (var i = 0; i < allrole.length; i++){
				const member = guild.members.cache.get("774870728285356083")
			 	member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
			}

			//Change bot role (Add)
			const newRolename = rolename

			const member = guild.members.cache.get("774870728285356083")
			member.roles.add(guild.roles.cache.find((role) => {return role.name === newRolename}))

			//Complete
			const emoji = client.emojis.cache.get(emojiId)
			message.reply(`${ emoji }` + intro);
		}
	}	

	if (message.content.startsWith('!!fubuki')){
		//have gif
        henshin("Shirakami Fubuki", "Fox Burger King", "780765353173057566", 'Hololive Gen 1/Gamers Shirakami Fubuki desu!')
    }

    else if (message.content.startsWith('!!suisei')){
  		//have gif
  		henshin("Hoshimachi Suisei", "Comet", "780475515370864670", 'Hololive 2D Talent Hoshimachi Suisei!')
    }

    else if (message.content.startsWith('!!aqua')){
  		//have gif
  		henshin("Minato Aqua", "Akukin", "780473856199884800", 'Hololive Gen 2 Minato Aqua desu!')
    }  	

    else if (message.content.startsWith('!!marine')){
  		henshin("Houshou Marine", "Houshou Pirates", "779987488574930955", 'Hololive Gen 3 Houshou Marine sanjo!')
    } 

    else if (message.content.startsWith('!!pekora')){
  		henshin("Usada Pekora", "Peko Peko", "779985756390162472", 'Hololive Gen 3 Usada Pekora peko!')
    }

    else if (message.content.startsWith('!!rushia')){
  		henshin("Uruha Rushia", "Necromancer", "779987468622495754", 'Hololive Gen 3 Uruha Rushia desu!')
    }

    else if (message.content.startsWith('!!haachama')){
  		henshin("Akai Haato", "Haachamachama", "779986363683569695", 'Hololive Gen 1 Haachama chama!')
    }

    else if (message.content.startsWith('You are FBK')) {
    	henshin("Shirakami Fubuki", "Fox Burger King", "775231808273907712", 'Kon Kon Kitsune!!!')
    }

    //END OF HENSHIN COMMANDS ==============================================================================================================

    else if (message.content.startsWith('Fubuki watch?')) {
       	client.user.setActivity("フブキCh。白上フブキ",{ type: 'WATCHING'})
    }

    else if (message.content.includes("piang")) {
    	message.reply('Pong!');
  	}

  	
});

client.login(config.token)

