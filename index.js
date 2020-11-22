const Commando = require('discord.js-commando')
const config = require('./config.json')

const path = require('path')
const command = require('./command')

const client = new Commando.CommandoClient({
	owner: "299176846132641792",
	commandPrefix: config.prefix
})

//Run this when the bot is startup
client.on('ready', async () => {
	console.log("Client is ready!")

	client.registry
	.registerGroups([
		['audio', 'Audio command'],
		['fbk_song', 'Fubuki Song command'],
		['command', 'Basic command'],
		['commander', 'Commander command'],
		['admin_command', 'Admin command'],
		])
	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, "commands"))

	//Random a status
	setInterval(function() {
		var livelist = Array("フブキCh。白上フブキ", "Botan Ch.獅白ぼたん", "Suisei Channel", "Korone Ch. 戌神ころね", "Aqua Ch. 湊あくあ", "Nakiri Ayame Ch. 百鬼あやめ", "Okayu Ch. 猫又おかゆ", "Mio Channel 大神ミオ", "Pekora Ch. 兎田ぺこら", "Marine Ch. 宝鐘マリン")
		var livelist = Array()
		var live = livelist[Math.floor(Math.random() * livelist.length)]
        
        client.user.setActivity(live,{ type: 'WATCHING'})
    }, 100000)
})

//Commands that does not works with discord commando or commands that does not use prefix
client.on('message', msg => {
	function Henshin(nickname, rolename){
		//Change bot name
       	var newNickname = "Shirakami Fubuki";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
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
	}
  	
  	if (msg.content.startsWith('HENSHIN FUBUKI')) {
  		Henshin("Shirakami Fubuki", "Fox Burger King")

    	//Complete
       	msg.reply("<:shira:775231808273907712> " + 'Hololive Gen 1/Gamers Shirakami Fubuki desu!');
    }

  	else if (msg.content.startsWith('HENSHIN SUISEI')) {
  		Henshin("Hoshimachi Suisei", "Comet")

    	//Complete
       	msg.reply('<:suisei:779987500927811604> ' + 'Hololive 2D Talent Hoshimachi Suisei!');
    }

    else if (msg.content.startsWith('HENSHIN PEKORA')) {
    	Henshin("Usada Pekora", "Peko Peko")
       	
    	//Complete
       	msg.reply('<:peko:779985756390162472> ' + 'Hololive Gen 3 Usada Pekora peko!');
    }

    else if (msg.content.startsWith('HENSHIN RUSHIA')) {
    	Henshin("Usada Rushia", "Necromancer")
       
    	//Complete
       	msg.reply('<:rushia:779987468622495754> ' + 'Hololive Gen 3 Uruha Rushia desu!');
    }

    else if (msg.content.startsWith('HENSHIN MARINE')) {
    	Henshin("Houshou Marine", "Houshou Pirates")
       	
    	//Complete
       	msg.reply('<:marine:779987488574930955> ' + 'Hololive Gen 3 Houshou Marine sanjo!');
    }

    else if (msg.content.startsWith('HENSHIN HAACHAMA')) {
    	Henshin("Akai Haato", "Haachamachama")
       	
    	//Complete
       	msg.reply('<:haachama:779986363683569695> ' + 'Hololive Gen 1 Haachama chama!');
    } 

    else if (msg.content.startsWith('HENSHIN AQUA')) {
    	Henshin("Minato Aqua", "Akukin")
       	
    	//Complete
       	msg.reply("<:aqua:779982662298632224> " + 'Hololive Gen 2 Minato Aqua desu!	');
    }

    else if (msg.content.startsWith('You are FBK')) {
       	//Change bot name
       	msg.guild.me.setNickname("").catch(console.error);

       	const { guild } = msg
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
       	msg.reply("<:shira:775231808273907712> " + 'Kon Kon Kitsune!!!');
    }

    //END OF HENSHIN COMMANDS ==============================================================================================================

    else if (msg.content.startsWith('Fubuki watch?')) {
       	client.user.setActivity("フブキCh。白上フブキ",{ type: 'WATCHING'})
    }

    else if (msg.content.includes("piang")) {
    	msg.reply('Pong!');
  	}

  	
});

client.login(config.token)