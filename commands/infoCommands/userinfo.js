const Discord = require ("discord.js");
const moment = require('moment');
const emoji = require('../../emoji/emojis')
const emojis = emoji.util

module.exports =  ({
    name : 'userinfo',
    description : "permet de récuperer les info d'un utilisateur",
    aliases : ['info', 'ui'],

    run : async(client, message, args)=>{
        const Member = message.mentions.members.first() || message.member
        const userinfo = message.mentions.users.first() || message.author
        let userBot = userinfo.bot
        if(userinfo.bot === true){
            userBot = "Oui"
        }else{
            userBot = "Non"
        }
         let pseudo = Member.nickname
         if(pseudo === null){
             pseudo = "Aucun"
         }

        const embed = new Discord.MessageEmbed()
            .setAuthor({name : `Informations sur ${userinfo.username}`, iconURL : Member.displayAvatarURL({dynamic : true})})
            .setColor("#0080ff")
            .setThumbnail(Member.displayAvatarURL({dynamic : true}))
            .setFooter({text :`Ask by ${message.author.tag}`,iconURL : message.author.displayAvatarURL({dynamic : true})}).setTimestamp()
            .addFields(
                {
                    name : `${emojis.arrow}Informations de l'utilisateur : `,
                    value : [
                        `${emojis.id}**Id de ${userinfo.username}** : ${Member.id}`,
                        ` ${emojis.robot}** Bot **: ${userBot}`,
                        `**Pseudonyme** : ${pseudo}`,
                        `**Join Discord** : \`${moment(userinfo.createdAt).format('DD/MM/YYYY')}\`\n **➡️** ${moment(userinfo.createdAt).startOf('day').fromNow()}`,
                    ].join("\n")
                },
                {
                    name : `${emojis.arrow}__Informations du membre :__ `,
                    value : [
                        `**Join server** : \`${moment(Member.joinedAt).format('DD/MM/YYYY')}\`\n **➡️** ${moment(Member.joinedAt).startOf('day').fromNow()}`,
                        `${emoji.util.role}** Rôle(s)** : ${Member.roles.cache.map( role => role).join(' ').replace("@everyone", " ")}`
                    ].join("\n")
                }

            )
            
            // .addField(`A rejoins Discord le :`, `${moment(Member.joinedAt).format('DD/MM/YYYY')}\n **➡️** ${moment(Member.joinedAt).startOf('day').fromNow()}`)
            // .addField(` ${emoji.util.role} Rôle(s)`, `${Member.roles.cache.map( role => role).join(' ').replace("@everyone", " ")}`)


            message.reply({embeds : [embed]});
    }
});
