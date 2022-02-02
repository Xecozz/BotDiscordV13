const Discord = require ("discord.js")
const { run} = require("../../events/evenements/command")

module.exports =  ({
    name : 'ping',
    description : "permet de savoir la latence du bot et de l'api",
    aliases:['p', 'h'],

    run : async(client, message, args)=>{
        const startTime = Date.now()
        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
        await message.channel.send('En cours...').then(async msg =>{

            const endTime = Date.now()
            const embed = new Discord.MessageEmbed()
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
                .setDescription(`Ma latence est de : \`${endTime - startTime}\`ms \n Latence de l'API Discord :\` ${client.ws.ping.toString()}\`ms`)
                .setColor('#0080ff')
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp()
            await msg.edit({content: null, embeds:[embed]});
        })
    }
})