module.exports = {
    name : 'guildMemberAdd',
    description : ' message de bienvenue',

    run : async(client, member) => {
        var avatar = member.avatarURL()
        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.user.username} a rejoins le Discord !`)
        .setDescription("Bienvenue à toi. Si tu as des questions n'hésite pas :slight_smile:")
        .setColor("#0080ff")
        .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp()
        .setThumbnail(avatar)
        .addField("Nombre de personnes sur le Discord :", `Il y a **${member.guild.memberCount-1}** personnes sur le Discord :partying_face: `)
        member.guild.channels.cache.get("935921874653814848").send({embeds: [embed]});
    }
}


