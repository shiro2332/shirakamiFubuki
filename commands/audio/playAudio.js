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
      const dispatcher = connection.play("http://www.sample-videos.com/audio/mp3/wave.mp3");

      dispatcher.setVolume(1.0); // half the volume

      dispatcher.on('finish', () => {
        console.log('Finished playing!');
      });

    })
  }
}