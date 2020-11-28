const Commando = require('discord.js-commando')
const config = require('./config.json')

const path = require('path')
const command = require('./command')
const information = require('./Information.json')

const client = new Commando.CommandoClient({
	owner: information.Ownership.ID,
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
			//['util', 'Utilities command'],
		])
		.registerDefaults()
		.registerCommandsIn(path.join(__dirname, "commands"))

	//Random a status
	setInterval(function () {
		var livelist = information.Status.ChannelList
		var live = livelist[Math.floor(Math.random() * livelist.length)]

		client.user.setActivity(live, { type: information.Status.Action[0] })
	}, 100000)
})

//Commands that does not works with discord commando or commands that does not use prefix
client.on('message', message => {
	const { voice } = message.member
	function playAudio(filepath) {
		if (!voice.channelID) {
			message.reply('You must be in a voice channel')
			return
		}

		voice.channel.join().then((connection) => {
			connection.play(path.join(__dirname, filepath))
		})
	}

	function henshin(nickname, rolename, emojiId, intro, color) {
		if (message.guild.me.displayName != nickname) {
			//Change bot name
			var newNickname = nickname;
			message.guild.me.setNickname(newNickname).catch(console.error);

			/**
			const { guild } = message
			//Change bot role (Remove)
			var allrole = Array(
				"Comet",
				"Fox Burger King", 
				"Haachamachama",
				"Akukin",
				"Houshou Pirates", 
				"Necromancer", 
				"Peko Peko",
				"Eyjafjalla", 
				"PPTenshi",
				"Training Succubus"
				)			
			for (var i = 0; i < allrole.length; i++) {
				const member = guild.members.cache.get(information.Client.BotID)
				member.roles.remove(guild.roles.cache.find((role) => { return role.name === allrole[i] }))
			}

			//Change bot role (Add)
			const newRolename = rolename

			const member = guild.members.cache.get(information.Client.BotID)
			member.roles.add(guild.roles.cache.find((role) => { return role.name === newRolename }))
			**/

			const role = message.guild.roles.find("Fox Burger King", "name");
    		role.setColor(color);

			//Complete
			const emoji = client.emojis.cache.get(emojiId)
			message.reply(`${emoji}` + intro);
		}
	}

	//Gen 0 ------------------------------------------------------------------------------------------------------------------
	if (message.content.startsWith('!!suisei')) {
		//have gif
		henshin("Hoshimachi Suisei", "Comet", "780475515370864670", 'Hololive 2D Talent Hoshimachi Suisei!', '#1b599e')
	}

	//Gen 1 ------------------------------------------------------------------------------------------------------------------
	else if (message.content.startsWith('!!fubuki')) {
		//have gif
		henshin("Shirakami Fubuki", "Fox Burger King", "780765353173057566", 'Hololive Gen 1/Gamers Shirakami Fubuki desu!', '#ffffff')
	}
	else if (message.content.startsWith('!!haachama')) {
		henshin("Akai Haato", "Haachamachama", "779986363683569695", 'Hololive Gen 1 Haachama chama!', '#db7c28')
	}

	//Gen 2 ------------------------------------------------------------------------------------------------------------------
	else if (message.content.startsWith('!!aqua')) {
		//have gif
		henshin("Minato Aqua", "Akukin", "780473856199884800", 'Hololive Gen 2 Minato Aqua desu!', '#8b4ee4')
	}

	//Gen 3 ------------------------------------------------------------------------------------------------------------------
	else if (message.content.startsWith('!!marine')) {
		henshin("Houshou Marine", "Houshou Pirates", "779987488574930955", 'Hololive Gen 3 Houshou Marine sanjo!', '#8f1515')
	}
	else if (message.content.startsWith('!!pekora')) {
		henshin("Usada Pekora", "Peko Peko", "779985756390162472", 'Hololive Gen 3 Usada Pekora peko!', '#5f98d8')
	}
	else if (message.content.startsWith('!!rushia')) {
		henshin("Uruha Rushia", "Necromancer", "779987468622495754", 'Hololive Gen 3 Uruha Rushia desu!', '#3dce91')
	}

	//Gen 4 ------------------------------------------------------------------------------------------------------------------
	else if (message.content.startsWith('!!kanata')) {
		henshin("Amane Kanata", "PPTenshi", "782140207649521664", 'Hololive Gen 4 Amane Kanata yo!', '#399dd3')
	}
	else if (message.content.startsWith('!!watame')) {
		henshin("Tsunomaki Watame", "Eyjafjalla", "782135944492482560", 'Hololive Gen 4 Tsunomaki Watame!', '#ebe573')
	}

	//Gen 5 ------------------------------------------------------------------------------------------------------------------
	else if (message.content.startsWith('!!aloe')) {
		henshin("Mano Aloe", "Training Succubus", "781917433023168574", 'Hololive Gen 5 Mano Aloe desu!', '#ce11ec')
	}

	else if (message.content.startsWith('You are FBK')) {
		henshin("Shirakami Fubuki", "Fox Burger King", "775231808273907712", 'Kon Kon Kitsune!!!', '#ffffff')
	}

	//Gamers  ----------------------------------------------------------------------------------------------------------------
	//else if ...

	//END OF HENSHIN COMMANDS ==============================================================================================================

	else if (message.content.startsWith('Fubuki watch?')) {
		client.user.setActivity("フブキCh。白上フブキ", { type: 'WATCHING' })
	}

	else if (message.content.includes("piang")) {
		message.reply('Pong!');
	}

	else if (message.content.includes("goodnight")) {
		var now = new Date();
		var hour = now.getHours();

		if (hour >= 15 && hour <= 20){
			henshin("Shirakami Fubuki", "Fox Burger King", "775231808273907712", 'Otsu-kōn deshita!')
			message.channel.send({ files: ["./assets/images/goodnight.jpg"] });
			if (!voice.channelID) {
				return
			}
			playAudio('./assets/song/fubuki/melody.mp3')
		} else {
			hour += 8
			if(hour >= 24){
				hour = hour - 24
			}
			message.channel.send("Too early to sleep! Now is " + hour )
		}
	}

	else if (message.content.startsWith('Love you Fubuki')) {
		message.channel.send({ files: ["./assets/images/loveyou.gif"] });
	}
});

client.login(config.token)

