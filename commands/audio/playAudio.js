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

     if(voice_channel != None):
        vc = await voice_channel.connect()

        vc.play(discord.FFmpegPCMAudio('http://www.sample-videos.com/audio/mp3/wave.mp3'), after=lambda e: print('done', e))
    else:
        await ctx.send("Join a voice channel first.")```
  }
}