module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hello',
			group: 'commamd',
			memberName: 'hello',
			description: 'Hi',
		});
	}

	run(message) {
		return message.channel.send('Hi friends ' + message.author.toString())
	}
};