const Discord = require("discord.js")
const emoji = require('../../emoji/emojis')
const emojis = emoji.util
module.exports = ({
    name: 'help',
    description: "permet d'appeller la fct help",
    aliases: ['h'],

    run: async (client, message, interaction, args) => {
        const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';
        const avatar = message.author.avatarURL()
        const idauthor = message.author.username
        console.log(message.channel.name)
        let embed = new Discord.MessageEmbed()
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

        // ensuite tu vas créer un object dans lequel tu vas mettre en key le name des customid et en value les embeds que tu veux lorsqu'on clique dessus
        const msg = await message.reply({ components: [row], embeds: [embed] })

        let help = {
            accueil: embed,
            moderation: new Discord.MessageEmbed()
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
                .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp(),
            jeux: new Discord.MessageEmbed()
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .addFields(
                    {
                        name: "**__Commandes jeux 🕹️:__**",
                        value: [
                            `🛠️en cours de dev...🛠️`,
                        ].join('\n')
                    })
                .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp(),
            status: new Discord.MessageEmbed()
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
                ),
            utile: new Discord.MessageEmbed()
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
                .addFields({
                    name: `**__Commandes utilitaire 📝:__**`,
                    value: [
                        `${emojis.arrow}**!help :** les fonctionnalités de InfinityBot🤖`,
                        `${emojis.arrow}**!invite:** inviter son ami sur le serveur😎`,
                        `${emojis.arrow}**!bot : **permet d'ajouter InfinityBot à son serveur🤩`,
                    ].join('\n')
                })
                .setFooter({ text: "InfinityBot", iconURL: imagebot }).setTimestamp()
        }

        // et graçe à ce système il ne te restera plus qu'à faire ceci regarde c'est hyper simple
        const collector = msg.createMessageComponentCollector();
        // time: 10_500, errors: ['time'] 
        collector.on('collect', async (i) => {
            //condition pas obligatoire c'est juste si tu veux que seule l'auteur de la commande puisse cliquer sur les bouttons
            if (i.user.id !== message.author.id) return i.reply({ content: 'Tu ne peux pas utiliser cette interaction!', ephemeral: true })
            await i.deferUpdate()
            // et regarde graçe au système avec l'object il te reste plus qu'à faire ça et ça va automatiquement edit l'embed en fonction de sur quel boutton la personne a cliqué
            await i.message.edit({ embeds: [help[i.customId]] });
        })
    }
});