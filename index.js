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
		['command', 'Basic command'],
		['commander', 'Commander command'],
		])
	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, "commands"))


	setInterval(function() {
		var livelist = Array("フブキCh。白上フブキ", "Botan Ch.獅白ぼたん", "Suisei Channel", "Korone Ch. 戌神ころね", "Aqua Ch. 湊あくあ", "Nakiri Ayame Ch. 百鬼あやめ", "Okayu Ch. 猫又おかゆ", "Mio Channel 大神ミオ", "Pekora Ch. 兎田ぺこら", "Marine Ch. 宝鐘マリン")
		var live = livelist[Math.floor(Math.random() * livelist.length)]
        
        client.user.setActivity(live,{ type: 'WATCHING'})
    }, 100000)
})

//Commands that does not works with discord commando
client.on('message', msg => {
  	if (msg.content.includes("piang")) {
    	msg.reply('Pong!');
  	}

  	else if (msg.content.startsWith('HENSHIN FUBUKI')) {
  		//Change bot name
       	var newNickname = "Shirakami Fubuki";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet"]
       	for (i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Fox Burger King"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply('Fubuki as Scatman!!!');
    }

  	else if (msg.content.startsWith('HENSHIN SUISEI')) {
  		//Change bot name
       	var newNickname = "Hoshimachi Suisei";
       	msg.guild.me.setNickname(newNickname).catch(console.error);

       	const { guild } = msg
       	//Change bot role (Remove)
       	var allrole = ["Fox Burger King", "Comet"]
       	for (i = 0; i < allrole.length; i++){
       		const member = guild.members.cache.get("774870728285356083")
    		member.roles.remove(guild.roles.cache.find((role) => {return role.name === allrole[i]}))
       	}

       	//Change bot role (Add)
       	const rolename = "Comet"

    	const member = guild.members.cache.get("774870728285356083")
    	member.roles.add(guild.roles.cache.find((role) => {return role.name === rolename}))

    	//Complete
       	msg.reply('Fubuki as Suichopath!!!');
    }

    else if (msg.content.startsWith('HENSHIN PEKO PEKO')) {
       	var newNickname = "Usada Pekora";
       	msg.guild.me.setNickname(newNickname).catch(console.error);
       	msg.reply('Fubuki as Natural Comedian!!!');
    }

    else if (msg.content.startsWith('HENSHIN PETTAN')) {
       	var newNickname = "Uruha Rushia";
       	msg.guild.me.setNickname(newNickname).catch(console.error);
       	msg.reply('Fubuki as Pettan!!!');
    }

    else if (msg.content.startsWith('HENSHIN AHOY')) {
       	var newNickname = "Houshou Marine";
       	msg.guild.me.setNickname(newNickname).catch(console.error);
       	msg.reply('Fubuki as Senchou!!!');
    }

    else if (msg.content.startsWith('What are you watching, Fubuki?')) {
       	client.user.setActivity("フブキCh。白上フブキ",{ type: 'WATCHING'})
    }

    else if (msg.content.startsWith('You are FBK')) {
       	var newNickname = "";
       	msg.guild.me.setNickname(newNickname).catch(console.error);
       	msg.reply('Kon Kon Kitsune!!!');
    }

});

client.login(config.token)