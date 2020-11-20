const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'audio',
            memberName: 'leave',
            description: 'Leave voice channel',
        })
    }

    async run(message) {
        const { voice } = message.member

          if (!voice.channelID) {
              message.reply('You must be in a voice channel')
              return
          }

        voice.channel.leave()
    }
}