const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'intro',
      group: 'audio',
      memberName: 'intro',
      description: 'Plays intro',
    })
  }

  async run(message) {
    const { voice } = message.member

    if (!voice.channelID) {
      message.reply('You must be in a voice channel')
      return
    }

    voice.channel.join().then((connection) => {
      //connection.play(path.join(__dirname, 'angery.mp3'))
      connection.play("https://download1478.mediafire.com/qms8yzrx453g/177js1r81b7b1i5/fbkIntro.mp3")
    })
  }
}