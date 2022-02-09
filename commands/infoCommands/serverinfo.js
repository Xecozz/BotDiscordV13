const Discord = require ("discord.js");
const moment = require('moment');
const emoji = require('../../emoji/emojis');
const emojis = emoji.util
module.exports =  ({
    name : 'serverinfo',
    description : "permet de récuperer les info d'un utilisateur",
    aliases : ['si'],
    run : async(client, message, args)=>{
        const guild = message.guild
        const embed = new Discord.MessageEmbed()
            .setAuthor({name : `Info sur ${guild.name}`, iconURL : guild.iconURL({dynamic : true})})
            .setColor("#0080ff")
            .setThumbnail(guild.iconURL({dynamic : true}))
            .addFields(
                {
                    name : ` ${emojis.arrow} Informations générales :` ,
                    value : [
                        `Name : ${guild.name}`,
                        `Créer le : <t:${parseInt(guild.createdTimestamp / 1000)}:R>`,
                        `Fondateur : <@${guild.ownerId}>`,
                        `Description : ${guild.description}`,

                    ].join("\n")
           
                },
                {

                    name : ` ${emojis.arrow}Informations Membres : `,
                    value :[
                        `${emojis.tag}Membres : ${guild.members.cache.filter((m)=> !m.user.bot).size}`,
                        ` ${emojis.robot}Bots : ${guild.members.cache.filter((m)=> m.user.bot).size}`,
                        `\n ${emojis.user}Total : ${guild.memberCount}`,
                    ].join("\n")
                     
                },
                {
                    name : ` ${emojis.arrow}Informations Channels :`,
                    value : 
                        [
                            `Texte : ${guild.channels.cache.filter((c)=> c.type === "GUILD_TEXT").size}`,
                            `Vocal : ${guild.channels.cache.filter((c)=> c.type === "GUILD_VOICE").size}`,
                            ` Categories : ${guild.channels.cache.filter((c)=> c.type === "GUILD_CATEGORY").size}`,
                            `\nTotal : ${guild.channels.cache.size} `,

                        ].join("\n")

                },
                {
                    name : ` ${emojis.arrow} Roles : `,
                    value : [
                        `${emojis.role} Roles : ${guild.roles.cache.size}`,
                    ].join("\n")
                }
            )
            .setFooter({text :`Ask by ${message.author.tag}`,iconURL : message.author.displayAvatarURL({dynamic : true})}).setTimestamp()



            message.reply({embeds : [embed]});
    }
});
