const Discord = require("discord.js")
const emoji = require('../../emoji/emojis')
const emojis = emoji.util
module.exports = ({
    name: 'test',
    description: "permet d'appeller la fct ticket",
    aliases: ['t'],

    run: async (client, message, interaction, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Ticket")
            .setDescription("si vous avez des demandes privées ouvrez un ticket");
        var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("bouton1")
                .setLabel("ticket")
                .setStyle("DANGER")
                .setEmoji("🎫")
            )
        message.guild.channels.create(message.author.tag, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [{
                id: message.guild.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            }]
        });
        message.channel.send({ embeds: [embed], components: [row] });

    }
});