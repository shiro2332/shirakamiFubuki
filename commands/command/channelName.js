module.exports = client => {
	const channelID = '775679137472970763'

	const update = guild => {
		const channel = guild.channels.cache.get(channelID)
		channel.setName(`Total people: ${guild.memberCount.toLocaleString()}`)
	}

	client.on('guildMemberAdd', (member) => update(member.guild))
	client.on('guildMemberRemove', (member) => update(member.guild))

	const guild = client.guilds.cache.get('587240994408235010')
	update(guild)
}