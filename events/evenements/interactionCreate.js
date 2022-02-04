/*const Discord = require("discord.js");
module.exports = {
    name : 'interactionCreate',
    description : ' button interaction',    

    run : async(client, interaction, message) => {
        if(interaction.isButton()){
            if(interaction.customId === "moderation"){
                const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
                const embed = new Discord.MessageEmbed()
                .setTitle("Commandes modération:")
                .setDescription("en cours de développement...🛠️")
                .setColor('#0080ff')
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp()
                await interaction.reply({content: null, embeds:[embed]});
            }
        }

    }


}*/
