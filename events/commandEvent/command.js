const Discord = require("discord.js");

module.exports = {
    name: 'messageCreate',

    run: async (client, message) =>{
        const {prefix} = client.config

        if(message.author.bot || message.system || !message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const commandName = args[0].toLowerCase().normalize()
        const cmd = client.commands.get(commandName) || client.aliases.get(commandName)
        args.shift()
        if(cmd) {
            cmd.run(client, message, args)
        }
    }

}