const Discord = require("discord.js")
const emoji = require('../../emoji/emojis')
const emojis = emoji.util
module.exports = ({
    name: 'help',
    description: "permet d'appeller la fct help",
    aliases: ['h'],

    run: async (client, message, interaction, args) => {
        message.delete()
        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
        var avatar = message.author.avatarURL()
        var idauthor = message.author.username
        const embed = new Discord.MessageEmbed()
            .setColor("#0080ff")
            .setTitle("__Tableau des commandes :__")
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
            .setDescription("Bonjour, je suis infinityBot 😄, \n je suis votre bot personnalisé créé par **Camille**.\n Cliquez sur les differents boutons si dessous pour découvrir mes fonctionnalitées ⬇")
            .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp();
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


        var msg = await message.channel.send({ embeds: [embed], components: [row] })
        //accueil

        var filter = (interaction) => interaction.customId === "accueil" && message.channel.send != ({ embeds: [embed] });
        msg.awaitMessageComponent({ filter })
            .then(interaction => interaction.update({ embeds: [embed], components: [row] }))
            .catch(console.error);

        //modération
        const embed_moderation = new Discord.MessageEmbed()
            .setColor("#0080ff")
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
            .addFields(
                {
                    name: "**__Commandes modération 🛠️ :__**",
                    value: [
                        `${emojis.arrow}**!clear + le nombres de messages à supprimer : **permet de supprimer un nombres de messages dans un channel`,
                        `${emojis.arrow}**!annonce [beta]+ message de l'annonce :** permet au Administrateur de poster une annonce😎`,

                    ].join('\n')
                }
            )
            .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp();

        var filter = (interaction) => interaction.customId === "moderation";
        msg.awaitMessageComponent({ filter })
            .then(interaction => interaction.deferUpdate({ embeds: [embed_moderation], components: [row] }))
            .catch(console.error);

        //jeux
        const embed_jeux = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
            .addFields(
                {
                    name: "**__Commandes jeux 🕹️:__**",
                    value: [
                        `🛠️en cours de dev...🛠️`,
                    ].join('\n')
                })
            .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp();

        var filter = (interaction) => interaction.customId === "jeux";
        msg.awaitMessageComponent({ filter })
            .then(interaction => interaction.deferUpdate({ embeds: [embed_jeux], components: [row] }))
            .catch(console.error);

        //devin
        const embed_devin = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
            .addFields(
                {
                    name: "**__Commandes de Devin 🔮:__**",
                    value: [
                        `${emojis.arrow}**!avatar :** découvrir l'avatar de la personnes mentionnée`,
                        `${emojis.arrow}**!ping ou !p :** découvrir la latence du bot et de l'api Discord🤖`,
                        `${emojis.arrow}**!userinfo ou !ui:** découvrir des informations secrète sur le membre mentionné🤫`,
                        `${emojis.arrow}**!serverinfo ou !si : ** découvrir des informations secrète sur le serveur🤫`,
                    ].join('\n')
                }
            )

            .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp();

        var filter = (interaction) => interaction.customId === "status";
        msg.awaitMessageComponent({ filter })
            .then(interaction => interaction.deferUpdate({ embeds: [embed_devin], components: [row] }))
            .catch(console.error);

        //utilitaire
        const embed_utilitaire = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
            .addFields({
                name: `**__Commandes utilitaire 📝:__**`,
                value: [
                    `${emojis.arrow}**!help :** les fonctionnalités de InfinityBot🤖`,
                    `${emojis.arrow}**!invite:** inviter son ami sur le serveur😎`,
                    `${emojis.arrow}**!bot:** découvrir des informations secrète sur le membre mentionné🤫`,
                    `${emojis.arrow}**!serverinfo ou !si : **permet d'ajouter InfinityBot à son serveur🤩`,
                ].join('\n')
            })
            .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp();

        var filter = (interaction) => interaction.customId === "utile";
        msg.awaitMessageComponent({ filter })
            .then(interaction => interaction.deferUpdate({ embeds: [embed_utilitaire], components: [row] }))
            .catch(console.error);



    }
});