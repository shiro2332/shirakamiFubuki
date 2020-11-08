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
      connection.play("http://www.sample-videos.com/audio/mp3/wave.mp3");
      //const dispatcher = connection.play('/home/discord/audio.mp3', {volume: 0.5,});
    })
  }
}