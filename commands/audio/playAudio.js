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
      //connection.play("http://download2282.mediafire.com/nj9brysjmr3g/q05u8i8jze9l77l/angery.mp3");
      const dispatcher = connection.play('http://download2282.mediafire.com/nj9brysjmr3g/q05u8i8jze9l77l/angery.mp3', {volume: 0.5,});
    })
  }
}