//const Discord = require('discord.js')
//const client = new Discord.Client()

const Commando = require('discord.js-commando')

const config = require('./config.json')
const command = require('./command.js')

const path = require('path')
const client = new Commando.CommandoClient({
	owner: "299176846132641792",
	commandPrefix: config.prefix
})

client.on('ready', async () => {
	console.log("Client is ready!")

	client.registry
	.registerGroups([
		['audio', 'Audio command'],
		['command', 'Basic command'],
		])
	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, "commands"))

	setInterval(function() {
		var livelist = Array("フブキCh。白上フブキ", "Botan Ch.獅白ぼたん", "Suisei Channel", "Korone Ch. 戌神ころね")
		var live = livelist[Math.floor(Math.random() * livelist.length)]
        
        client.user.setActivity(live,{ type: 'WATCHING'})
    }, 100000)
		

		
})

client.login(config.token)