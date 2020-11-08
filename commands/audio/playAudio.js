const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'angery',
      group: 'audio',
      memberName: 'angery',
      description: 'Plays some audio',
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
      connection.play("https://drive.google.com/file/d/18jYVzK-unDcylyAG8lzM9Xnkoqs3_qi0/view?usp=sharing")
    })
  }
}