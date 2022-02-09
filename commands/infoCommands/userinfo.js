const Discord = require ("discord.js");
const moment = require('moment');

module.exports =  ({
    name : 'userinfo',
    description : "permet de récuperer les info d'un utilisateur",
    aliases : ['info'],

    run : async(client, message, args)=>{
        const Member = message.mentions.members.first() || message.member
        const userinfo = message.mentions.users.first() || message.author
        let userBot = userinfo.bot
        if(userinfo.bot === true){
            userBot = "Oui"
        }else{
            userBot = "Non"
        }

        const embed = new Discord.MessageEmbed()
            .setAuthor({name : `Info sur ${Member.displayName}`, iconURL : Member.displayAvatarURL({dynamic : true})})
            .setColor("#0080ff")
            .setThumbnail(Member.displayAvatarURL({dynamic : true}))
            .setFooter({text :`Ask by ${message.author.tag}`,iconURL : message.author.displayAvatarURL({dynamic : true})}).setTimestamp()
            .addField(`Tag de ${Member.displayName}`, `${Member.id}`)
            .addField(`Est un bot`, `${userBot}`)
            .addField(`Pseudo`, Member.nickname || "Aucun")
            .addField(`A rejoins le serveur le :`, `${moment(Member.joinedAt).format('DD/MM/YYYY')}\n **➡️** ${moment(Member.joinedAt).startOf('day').fromNow()}` )
            .addField(`A rejoins Discord le :`, `${moment(Member.joinedAt).format('DD/MM/YYYY')}\n **➡️** ${moment(Member.joinedAt).startOf('day').fromNow()}`)
            .addField(`Rôle(s)`, `${Member.roles.cache.map( role => role).join(' ').replace("@everyone", " ")}`)


            message.reply({embeds : [embed]});
    }
});
