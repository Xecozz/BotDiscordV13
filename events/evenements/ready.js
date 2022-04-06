module.exports = {
    name: 'ready',

    run: async (client) => {
        console.log(`${client.user.username}: En ligne sur ${client.guilds.cache.size} serveur(s) :`); // quand le bot est connecté au Discord en ligne il écrit : "Le bot est en ligne"
        const guild = client.guilds.cache.map(g => g.name).join(" \n");
        console.log(guild)
        // client.guilds.cache.forEach(guild => console.log(guild.name))
        client.user.setActivity("!help", { type: `WATCHING` });
    }
}