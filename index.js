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

	const botStatus = "フブキCh。白上フブキ"
	client.user.setActivity(botStatus,{ type: 'WATCHING'})
})

client.login(config.token)