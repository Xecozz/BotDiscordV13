const Discord = require ("discord.js")

module.exports =  ({
    name : 'bot',
    description : "permet d'ajouter le bot à son serveur",

    run : async(client, message, args)=>{
        var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setLabel("Ajouter !")
                    .setStyle("LINK")
                    .setEmoji("🤖")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=935935205791895603&permissions=8&scope=bot")                
                )
        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
        var avatar = message.author.avatarURL()
        var idauthor = message.author.username
        const embed = new Discord.MessageEmbed()
        .setColor("#0080ff")
        .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
        .addField("Qui suis-je ?","Bonjour, je suis infinityBot🤖, je suis un bot personnalisé créé par **Camille**.\n Pour découvrir mes fonctionnalités écrivez **!help** 🤯")
        .addField("Envie de m'ajouter?", "⬇")
        .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();
            

            message.channel.send({embeds: [embed], components : [row]}) 
        
    }
});