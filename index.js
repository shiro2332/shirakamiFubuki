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

	command(client, ['hello'], (message) =>{
		message.channel.send('Hi friends ' + message.author.toString())
	})

	command(client, ['ping', 'test'], (message) =>{
		message.channel.send('Pong')
	})	

	command(client, ['Who_are_you?'], (message) =>{
		message.channel.send("I'm Scatman")
	})	

	command(client, ['Food?'], (message) =>{
		message.channel.send(":hamburger:")
	})

	command(client, ['count'], (message) =>{
		message.channel.send("1 fox, 2 fox, 3 fox, FUBUKI! \n4 fox, 5 fox, 6 fox, FUBUKI! \n7 fox, 8 fox, 9 fox, FUBUKI! \n10 fox kawaii yooo..... \nJANG!")
	})

	command(client, [''], (message) =>{
		message.channel.send("Kon Kon")
	})

	command(client, 'serverList', (message) =>{
		client.guilds.cache.forEach((guild) => {
			message.channel.send(`${guild.name} has a total of ${guild.memberCount} people.`)
		})
	})

	command(client, ['whereFriend?'], (message) =>{
		message.channel.send({files: ["./Images/watching.png"]})
	})

	command(client, 'status', (message) => {
		const botStatus = message.content.replace('!!status ', '')

		client.user.setActivity(botStatus,{ type: 'WATCHING'})
	})

	command(client, 'cc', (message) => {
		if(message.member.hasPermission("Immortal")){
			message.channel.messages.fetch().then((results) =>{
				message.channel.bulkDelete(results)
			})
		}
	})

})

client.login(config.token)