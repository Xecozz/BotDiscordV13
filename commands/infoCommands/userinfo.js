const Discord = require("discord.js");
const moment = require('moment');
const emoji = require('../../emoji/emojis')
const emojis = emoji.util


module.exports = ({
    name: 'userinfo',
    description: "permet de récuperer les info d'un utilisateur",
    aliases: ['info', 'ui'],

    run: async (client, message, args) => {
        const Member = message.mentions.members.first() || message.member
        const userinfo = message.mentions.users.first() || message.author

        const embed = new Discord.MessageEmbed()
            .setTitle(`${emojis.user} Informations sur ${userinfo.username}`)
            .setColor("#0080ff")
            .setThumbnail(Member.displayAvatarURL({ dynamic: true }))
            .setFooter({ text: `Ask by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }).setTimestamp()
            .addFields(
                {
                    name: `${emojis.arrow}__Informations de l'utilisateur :__ `,
                    value: [
                        `${emojis.id}**Id de ${userinfo.username}** : ${Member.id}`,
                        `${emojis.tag}**Tag de ${userinfo.username}** : ${userinfo.tag}`,
                        ` ${emojis.robot}** Bot **: ${userinfo.bot ? "Oui" : "Non"}`,
                        `${emojis.nickname}**Pseudonyme** : ${Member.nickname ? Member.nickname : "Aucun"}`,
                        `${emojis.joined}**Join Discord** : \`${moment(userinfo.createdAt).format('DD/MM/YYYY')}\` `,
                    ].join("\n")
                },
                {
                    name: `${emojis.arrow}__Informations du membre :__ `,
                    value: [
                        `${emojis.joinedMember}**Join server** : \`${moment(Member.joinedAt).format('DD/MM/YYYY')}\``,
                        `${emoji.util.role}** Rôle(s)** : ${Member.roles.cache.map(role => role).join(' ').replace("@everyone", " ")}`
                    ].join("\n")
                }

            )

        message.reply({ embeds: [embed] });
    }
});

