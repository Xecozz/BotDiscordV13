const Discord = require ("discord.js")

module.exports =  ({
    name : 'clear',
    description : "permet de supprimer des messages",

    run : async(client, message, args)=>{
            message.delete();
            if (message.member.permissions.has('MANAGE_MESSAGES')){
                let args = message.content.trim().split(/ +/g);
        
                if(args[1]){
                    if (!isNaN(args[1]) && args[1]>= 1 && args[1]<=99 ){
        
                        message.channel.bulkDelete(args[1]).catch(async err => {
                            console.log(err)
                            if(err) return message.channel.send("Les messages datent de plus de 14 jours !")}).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
                        id = message.author.avatarURL()
                        const embed = new Discord.MessageEmbed()
                            .setTitle(message.author.username +` a supprimé ${args[1]} messages !`)
                            .setColor("#0080ff")
                            .setAuthor({ name :  message.author.username, iconURL: message.author.avatarURL()})
                            .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();
                            message.channel.send({embeds: [embed]}).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                        
        
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
});

