const Discord = require("discord.js")

module.exports =  ({
    name : 'help',
    description : "permet d'appeller la fct help",
    aliases:['h'],

    run : async(client, message, interaction, args)=>{
        message.delete()
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
                
                
                var msg =  await message.channel.send({embeds: [embed], components : [row]})  
                //accueil

                var filter = (interaction) => interaction.customId === "accueil" && message.channel.send!= ({embeds: [embed]}) ;
                msg.awaitMessageComponent({filter})
                     .then(interaction => interaction.update({embeds: [embed], components : [row]}))
                     .catch(console.error);

                //modération
                const embed_moderation = new Discord.MessageEmbed()
                .setColor("#0080ff")
                .setTitle("Commandes modération 🛠️ : ")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
                .addField("**!clear** + le nombres de messages à supprimer", "permet de supprimer un nombres de messages dans un channel")
                .addField("**!annonce** + message de l'annonce", "permet au Administrateur de poster une annonce😎")
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();

                var filter = (interaction) => interaction.customId === "moderation";
                msg.awaitMessageComponent({ filter})
                     .then(interaction => interaction.update({embeds: [embed_moderation], components : [row]}))
                     .catch(console.error);
                
                //jeux
                const embed_jeux = new Discord.MessageEmbed()
                .setTitle("Commandes jeux 🕹️: ")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
                .setDescription("🛠️en cours de dev...🛠️")
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();

                var filter= (interaction) => interaction.customId === "jeux";
                msg.awaitMessageComponent({filter})
                    .then(interaction => interaction.update({embeds: [embed_jeux], components : [row]}))
                    .catch(console.error);

                //devin
                const embed_devin = new Discord.MessageEmbed()
                .setTitle("Commandes de Devin 🔮: ")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
                .addField("**!avatar**", "découvrir l'avatar de la personnes mentionnée")
                .addField("**!ping**", "découvrir la latence du bot et de l'api Discord🤖")
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();

                var filter= (interaction) => interaction.customId === "status";
                msg.awaitMessageComponent({filter})
                    .then(interaction => interaction.update({embeds: [embed_devin], components : [row]}))
                    .catch(console.error);
                
                //utilitaire
                const embed_utilitaire = new Discord.MessageEmbed()
                .setTitle("Commandes utilitaire 📝: ")
                .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
                .addField("**!help**", "découvrir les fonctionnalités de InfinityBot")
                .addField("**!invite**", "inviter son ami sur le serveur😎")
                .addField("**!bot**", "permet d'ajouter InfinityBot à son serveur🤩")
                .setFooter({ text: "InfinityBot", iconURL: imagebot}).setTimestamp();
                

                var filter= (interaction) => interaction.customId === "utile";
                msg.awaitMessageComponent({filter})
                    .then(interaction => interaction.update({embeds: [embed_utilitaire], components : [row]}))
                    .catch(console.error);
                


        }
    });