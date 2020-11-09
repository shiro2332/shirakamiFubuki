const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'inub',
      group: 'commander',
      memberName: 'inub',
      description: 'You are noob',

    })
  }

  async run(message) {
    const { voice } = message.member

    if (!voice.channelID) {
        message.reply('You must be in a voice channel')
        return
      }

    if(message.member.roles.cache.some(role => role.name === 'Shikikan')){
    
      voice.channel.join().then((connection) => {
        var voicelineList = Array('../../assets/audio/commander/0aff.ogg', '../../assets/audio/commander/1aff.ogg', '../../assets/audio/commander/2aff.ogg', '../../assets/audio/commander/3aff.ogg', '../../assets/audio/commander/4aff.ogg')
        var voiceline = voicelineList[Math.floor(Math.random() * voicelineList.length)]

        connection.play(path.join(__dirname, voiceline))
      })

    } else {
      message.reply('You are not a commander!')
      connection.play(path.join(__dirname, '../../assets/audio/angery.mp3'))
    }
    
  }
}