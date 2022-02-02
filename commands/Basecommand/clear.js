const Discord = require ("discord.js")
const { run} = require("../../events/evenements/command")

module.exports =  ({
    name : 'clear',
    description : "permet de supprimer des messages",

    run : async(client, message, args)=>{
        if(message.content.startsWith("!clear")){
            message.delete();
            if (message.member.permissions.has('MANAGE_MESSAGES')){
                let args = message.content.trim().split(/ +/g);
        
                if(args[1]){
                    if (!isNaN(args[1]) && args[1]>= 1 && args[1]<=99 ){
        
                        message.channel.bulkDelete(args[1])
                        message.channel.send(`Vous avez supprimé ${args[1]} message(s)`)
                        
        
                    }
                    else{
                        message.channel.send(`Vous devez indiquer une valeur entre 1 et 99 !`)
                    }
                }
                else{
                    message.channel.send(`Vous devez indiquer un nombre !`)
                }
            }
            else{
                message.channel.send(`Vous devez avoir la permission de gérer les messages pour pouvoir éxécuter la commande !`)
            }
        }
    }
});

