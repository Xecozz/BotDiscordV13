const Discord = require("discord.js")
const emoji = require('../../emoji/emojis')
const emojis = emoji.util
module.exports = ({
    name: 'help1',
    description: "permet d'appeller la fct help",
    aliases: ['h'],

    run: async (client, message, interaction, args) => {

        let embed = new Discord.MessageEmbed()
            .setTitle('test')
            .setDescription('machin test')
            .setColor('FFFFFF')

        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setLabel("youhouu")
                    .setCustomId('accueil')
                    .setStyle("PRIMARY"),
                new Discord.MessageButton()
                    .setLabel("yeahhhh")
                    .setCustomId('antiraid')
                    .setStyle("SECONDARY"),
                new Discord.MessageButton()
                    .setLabel("bzbzbz")
                    .setCustomId('fun')
                    .setStyle("DANGER")
            )
        // ensuite tu vas créer un object dans lequel tu vas mettre en key le name des customid et en value les embeds que tu veux lorsqu'on clique dessus
        const msg = await message.reply({ components: [row], embeds: [embed] })
        let help = {
            accueil: embed,
            antiraid: new Discord.MessageEmbed()
                .setTitle('Voici les commandes antiraid blabla')
                .setDescription('truc1, truc2, truc3')
                .setColor('FFFFFF'),
            fun: new Discord.MessageEmbed()
                .setTitle('Voici les commandes fun blabla')
                .setDescription('truc1, truc2, truc3')
                .setColor('FFFFFF'),
        }

        // et graçe à ce système il ne te restera plus qu'à faire ceci regarde c'est hyper simple

        const collector = msg.createMessageComponentCollector({});
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