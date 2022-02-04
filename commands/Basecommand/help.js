const Discord = require("discord.js")

module.exports =  ({
    name : 'help',
    description : "permet d'appeller la fct help",

    run : async(client, message, args)=>{
            const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
            var avatar = message.author.avatarURL()
            var idauthor = message.author.username
            const embed = new Discord.MessageEmbed()
                .setColor("#0080ff")
                .setTitle("Tableau des commandes : ")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
                .setDescription("Bonjour, je suis infinityBot 😄, \n je suis votre bot personnalisé créé par **Camille**.\n Cliquez sur les differents boutons si dessous pour découvrir mes fonctionnalitées ⬇")
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();
            var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("accueil")
                    .setLabel("Accueil")
                    .setStyle("SUCCESS")
                    .setEmoji("🛎️")
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId("moderation")
                    .setLabel("modération")
                    .setStyle("DANGER")
                    .setEmoji("🛠️")
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId("jeux")
                    .setLabel("jeux")
                    .setStyle("PRIMARY")
                    .setEmoji("🕹️")
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId("status")
                    .setLabel("Devin")
                    .setStyle("PRIMARY")
                    .setEmoji("🔮")
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId("utile")
                    .setLabel("Utilitaire")
                    .setStyle("SECONDARY")
                    .setEmoji("📝")
                )
                
                const msg = await message.channel.send({embeds: [embed], components : [row]})   
                
                const embed_moderation = new Discord.MessageEmbed()
                .setColor("#0080ff")
                .setTitle("Commandes modération 🛠️ : ")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
                .setDescription("en cours de dev...")
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();


                const verify = (interaction) => interaction.customId === 'moderation';
                msg.awaitMessageComponent({ verify})
                     .then(interaction => msg.edit({embeds: [embed_moderation], components : [row]}))
                     .catch(console.error);


        }
    });