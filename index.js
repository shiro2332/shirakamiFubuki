const Commando = require('discord.js-commando')
const config = require('./config.json')
const memberCount = require('./channelName.js')

const path = require('path')
const client = new Commando.CommandoClient({
	owner: "299176846132641792",
	commandPrefix: config.prefix
})

client.on('ready', async () => {
	console.log("Client is ready!")
	memberCount(client)

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

client.login(config.token)