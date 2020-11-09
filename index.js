//const Discord = require('discord.js')
//const client = new Discord.Client()

const Commando = require('discord.js-commando')
const fs = require('fs')

const config = require('./config.json')
const command = require('./command.js')

const path = require('path')
const client = new Commando.CommandoClient({
	owner: "299176846132641792",
	commandPrefix: config.prefix
})

client.on('ready', async () => {
	console.log("Client is ready!")

	const baseFile = 'commandBase.js'
	const commandBase = require(`./${baseFile}`)

	const readCommands = dir => {
		const files = fs.readdirSync(path.join(__dirname, dir))
		for (const file of files) {
			const stat = fs.lstatSync(path.join(__dirname, dir, file))
			if(stat.isDirectory()){
				readCommands(path.join(dir, file))
			} else if(file !== baseFile){
				const option = require(path.join(__dirname, dir, file))
				console.log(file, option)
			}
		}
	}

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