const Discord = require("discord.js")
module.exports = {
    name : 'ready',

    run : async(client) => {
        console.log(`${client.user.username}: En ligne sur ${client.guilds.cache.size} serveur(s) !`); // quand le bot est connecté au Discord en ligne il écrit : "Le bot est en ligne"
        client.user.setActivity("!help", {type : `WATCHING`});
    }
}