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
  	if (msg.content.startsWith('HENSHIN FUBUKI')) {
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

    	//Complete
    	const emoji = bot.emojis.cache.get("780332952151130113")
       	msg.reply(`${ emoji }` + 'Hololive Gen 1/Gamers Shirakami Fubuki desu!');
    }

  	else if (msg.content.startsWith('HENSHIN SUISEI')) {
  		//Change bot name
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
    }

    else if (msg.content.startsWith('HENSHIN PEKORA')) {
       	//Change bot name
       	var newNickname = "Usada Pekora";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
       	for (i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Peko Peko"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply('<:peko:779985756390162472> ' + 'Hololive Gen 3 Usada Pekora peko!');
    }

    else if (msg.content.startsWith('HENSHIN RUSHIA')) {
       	//Change bot name
       	var newNickname = "Usada Rushia";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
       	for (i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Necromancer"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply('<:rushia:779987468622495754> ' + 'Hololive Gen 3 Uruha Rushia desu!');
    }

    else if (msg.content.startsWith('HENSHIN MARINE')) {
       	//Change bot name
       	var newNickname = "Houshou Marine";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
       	for (i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Houshou Pirates"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply('<:marine:779987488574930955> ' + 'Hololive Gen 3 Houshou Marine sanjo!');
    }

    else if (msg.content.startsWith('HENSHIN HAACHAMA')) {
       	//Change bot name
       	var newNickname = "Akai Haato";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
       	for (i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Haachamachama"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply('<:haachama:779986363683569695> ' + 'Hololive Gen 1 Haachama chama!');
    } 

    else if (msg.content.startsWith('HENSHIN AQUA')) {
       	//Change bot name
       	var newNickname = "Minato Aqua";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet", "Houshou Pirates", "Necromancer", "Peko Peko", "Haachamachama", "Akukin"]
       	for (i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Akukin"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply("<:aqua:779982662298632224> " + 'Hololive Gen 2 Minato Aqua desu!	');
    }

    else if (msg.content.startsWith('You are FBK')) {
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