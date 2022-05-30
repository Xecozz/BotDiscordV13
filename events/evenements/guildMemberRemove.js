const Discord = require("discord.js")
module.exports = {
    name: 'guildMemberRemove',
    description: "message d'aurevoir",

    run: async (client, member) => {
        avatar = member.user.displayAvatarURL({})
        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
        const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `${member.user.username} a quitté le Discord !`, iconURL: avatar })
            .setColor("#0080ff")
            .setThumbnail(avatar)
            .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp()
            .addField("Nombre de personnes sur le Discord :", `Il y a **${member.guild.memberCount - 1}** personnes sur le Discord 😪 `)
        member.guild.channels.cache.get("974258062011547700").send({ embeds: [embed] });
    }
}
