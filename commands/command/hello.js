module.exports = {
  commands: ['hello'],
  //expectedArgs: '',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) => {

  	const shira = client.emojis.get("775194767247409163");
    message.channel.send('Hi friends ' + message.author.toString() + `${shira}`)
  },
  permissions: 'ADMINISTRATOR',
  requiredRoles: [],
}