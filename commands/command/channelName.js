module.exports = (client) => {
  const channelId = '775679137472970763'
  const channelID2 = '775692958388453376'

  const updateMembers1 = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
  }

  const updateMembers2 = (guild, time) => {
  	time += 1
    const channel = guild.channels.cache.get(channelId)
    var string = 'Fubuki online since ' + time + ` min`
    channel.setName(string)
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get('587240994408235010')
  updateMembers1(guild)

  var time = 0
  setInterval(function() {
	updateMembers2(guild, time)
  }, 10000)
}