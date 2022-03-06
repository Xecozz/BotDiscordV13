const Discord = require ("discord.js");
const moment = require('moment');
const emoji = require('../../emoji/emojis');
const emojis = emoji.util


module.exports =  ({
    name : 'utilisateur',
    description : "permet de récuperer les info d'un utilisateur",
    aliases : ['ur'],

    run : async(client, message, args)=>{
        userInfo = client.users.cache.fetch(user.id => user.id === args[0])
        console.log(userInfo)

        const embed = new Discord.MessageEmbed()
            .setTitle(`${emojis.user } Informations sur ${userInfo.username}`)
            .setColor("#0080ff")
            .setThumbnail(userInfo.displayAvatarURL({dynamic : true}))
            .setFooter({text :`Ask by ${message.author.tag}`,iconURL : message.author.displayAvatarURL({dynamic : true})}).setTimestamp()
            .addFields(
                {
                    name : `${emojis.arrow}__Informations de l'utilisateur :__ `,
                    value : [
                        `${emojis.id}**Id de ${userInfo.username || userInfo.tag}** : ${userInfo.id}`,
                        `${emojis.tag}**Tag de ${userInfo.username}** : ${userInfo.tag}`,
                        ` ${emojis.robot}** Bot **: ${userInfo.bot ? "Oui" : "Non"}`,
                        `${emojis.nickname}**Pseudonyme** : ${userInfo.username || "Aucun"}`,
                        `${emojis.joined}**Join Discord** : \`${moment(userInfo.createdAt).format('DD/MM/YYYY')}\` `,
                    ].join("\n")
                }
            )

            message.reply({embeds : [embed]});
    }
});