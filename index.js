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

client.on('message', msg => {
  if (msg.content.includes("piang")) {
    msg.reply('Pong!');
  }

  if (msg.content.startsWith("HENSHIN FBK")) {
    msg.guild.me.setNickname("Fubuki");
  }

  if (msg.content.startsWith("HENSHIN SUISEI")) {
    msg.guild.me.setNickname("Suisei");
  }
});

client.login(config.token)