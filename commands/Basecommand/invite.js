const Discord = require("discord.js")

module.exports =  ({
    name : 'invite',
    description : "permet d'appeller la fct help",
    aliases:['i'],

    run : async(client, message, args)=>{
        message.delete()
        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
        var avatar = message.author.avatarURL()
        var idauthor = message.author.username
        const embed = new Discord.MessageEmbed()
            .setColor("#0080ff")
            .setTitle("Lien d'invitation : ⬇")
            .setDescription("https://discord.com/invite/CgvxMBayY3")
            .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
            .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();

            message.channel.send({embeds : [embed]});

        }
    });