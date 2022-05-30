const Discord = require("discord.js")
const { Client, Intents, Collection } = require("discord.js")
const fs = require('fs');
const path = require("path/posix");

class bot extends Client {
    constructor(options = { intents: new Discord.Intents(4871) }) {
        super(options);

        this.config = require('../../config')

        this.commands = new Collection()
        this.aliases = new Collection()

        this.initEvents()
        this.initCommands()

        this.login(this.config.token)

    }

    initCommands() {
        const subFolders = fs.readdirSync('./commands')
        for (const category of subFolders) {
            const commandsFiles = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith('.js'))
            for (const commandFile of commandsFiles) {
                const command = require(`../../commands/${category}/${commandFile}`)
                this.commands.set(command.name, command)
                if (command.aliases && command.aliases.length > 0) {
                    command.aliases.forEach(alias => this.aliases.set(alias, command))
                }
                delete require.cache[require.resolve(`../../commands/${category}/${commandFile}`)]

            }
        }
    }
    initEvents() {
        const subFolders = fs.readdirSync('./events')
        for (const category of subFolders) {
            const eventsFiles = fs.readdirSync(`./events/${category}`).filter(file => file.endsWith('.js'))
            for (const eventFile of eventsFiles) {
                const event = require(`../../events/${category}/${eventFile}`)
                this.on(event.name, (...args) => event.run(this, ...args))
                delete require.cache[require.resolve(`../../events/${category}/${eventFile}`)]

            }
        }
    }

}



exports.bot = bot