const Discord = require ("discord.js")

module.exports =  ({
    name : 'avatar',
    description : "permet de voir l'avatar de la personne mentionnée",

    run : async(client, message, args, commandName)=>{
            const Target = message.mentions.users.first() || message.author;

            const Response = new Discord.MessageEmbed()
                .setColor("#0080ff")
                .setAuthor({ name :` L'avatar de ${Target.tag} :`})
                .setImage(Target.displayAvatarURL({ size: 4096 ,dynamic: true}))
                .setFooter({text :`Ask by ${message.author.tag}`,iconURL : message.author.displayAvatarURL({dynamic : true})}).setTimestamp();

                message.reply({embeds : [Response]});
        
    }
});