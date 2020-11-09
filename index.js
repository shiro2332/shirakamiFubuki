const Commando = require('discord.js-commando')

const config = require('./config.json')
const channelList = require('./channelList.json')

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
		['commander', 'Commander command'],
		])
	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, "commands"))


	setInterval(function() {
		var livelist = channelList.CList;
		var live = livelist[Math.floor(Math.random() * livelist.length)]
        
        client.user.setActivity(live,{ type: 'WATCHING'})
    }, 100000)
		

		
})

client.login(config.token)