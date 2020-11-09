const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'asa',
      group: 'audio',
      memberName: 'asa',
      description: 'ED',
    })
  }

  async run(message) {
    const { voice } = message.member

    if (!voice.channelID) {
      message.reply('You must be in a voice channel')
      return
    }

    voice.channel.join().then((connection) => {
      connection.play(path.join(__dirname, '../assets/audio/asa.mp3'))
      //connection.play("http://download1642.mediafire.com/l5m95wz4yeig/q05u8i8jze9l77l/angery.mp3")
    })
  }
}