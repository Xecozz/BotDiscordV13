const Discord = require("discord.js")

module.exports =  ({
    name : 'invite',
    description : "permet d'appeller la fct help",
    aliases:['i'],

    run : async(client, message, args)=>{
        message.delete()
        

            message.channel.send({embeds : [embed]});

        }
    });