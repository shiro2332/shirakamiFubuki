const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'iswaifu',
      group: 'audio',
      memberName: 'iswaifu',
      description: 'Ask Fubuki if she is waifu',
    })
  }

  async run(message) {
    const { voice } = message.member

    if (!voice.channelID) {
      message.reply('You must be in a voice channel')
      return
    }

    voice.channel.join().then((connection) => {
        var voicelineList = Array('../../assets/audio/hifrens1.mp3', '../../assets/audio/hifrens2')
        var voiceline = voicelineList[Math.floor(Math.random() * voicelineList.length)]

        connection.play(path.join(__dirname, voiceline))
      })  }
}