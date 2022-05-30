const { Client, MessageEmbed } = require('discord.js');
const status = require('minecraft-server-status');
const emoji = require("../../emoji/emojis");
const request = require('request');
const emojis = emoji.util;
module.exports = {
    name: 'ready',

    run: async (client) => {
        // const imagebot = 'https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png';

        // const embed = new MessageEmbed()
        //     .setColor("#0080ff")
        //     .setAuthor({ name: 'Status de serveurs minecraft :', iconURL: 'https://leclaireur.fnac.com/wp-content/uploads/2021/12/minecraft.jpg', url: 'https://aternos.org/servers' })

        // const Responseembed1 = new MessageEmbed()
        //     .setColor("#0080ff")
        //     .setTitle('totolol92.aternos.me')
        //     .addFields(
        //         {
        //             name: "**__Serveur 1 (Survie non-Moddé)  :__**",
        //             value: [
        //                 `${emojis.arrow} "wait"`,

        //             ].join('\n')
        //         }
        //     )

        // const Responseembed2 = new MessageEmbed()
        //     .setColor("#0080ff")
        //     .setTitle('Nanapiou.aternos.me')
        //     .addFields(
        //         {
        //             name: "**__Serveur 2 (Survie Moddé)  :__**",
        //             value: [
        //                 `${emojis.arrow} "wait"`,
        //             ].join('\n')
        //         }
        //     )
        //     .setFooter({ text: "Status serveurs Mc", iconURL: "https://leclaireur.fnac.com/wp-content/uploads/2021/12/minecraft.jpg" })

        // client.guilds.cache.get("974258061403365456").channels.cache.get("975105581583044731").send({ content: "https://aternos.org/servers" })
        // client.guilds.cache.get("974258061403365456").channels.cache.get("975105581583044731").send({ embeds: [embed, Responseembed1, Responseembed2] }).then(msg => {
        //     setInterval(function () {

        //         try {
        //             request('https://eu.mc-api.net/v3/server/ping/totolol92.aternos.me%3A15607', { json: true }, (err, res, body) => {
        //                 if (err) { return console.log(err); }
        //                 let status = "error"
        //                 let joueurs = "aucun"
        //                 if (body.version == undefined) return;
        //                 if (body.version.protocol == 46) {
        //                     status = "❌"
        //                     Responseembed1.spliceFields([0], 1,
        //                         {
        //                             name: "**__Serveur 1 (Survie non-Moddé)  :__**",
        //                             value: [
        //                                 `${emojis.arrow} Status : ${status}`,
        //                                 `${emojis.arrow} Ip : ${body.dns.ip}`,
        //                                 `${emojis.arrow} Port : ${body.dns.port}`,

        //                             ].join('\n')
        //                         })


        //                 }
        //                 else if (body.version.protocol == 758) {
        //                     status = "✅"
        //                     if (body.players.sample  !== undefined) {
        //                         joueurs = body.players.sample.map(player => player.name).join(' ')
        //                     }

        //                     Responseembed2.spliceFields([0], 1,
        //                         {
        //                             name: "**__Serveur 1 (Survie non-Moddé)  :__**",
        //                             value: [
        //                                 `${emojis.arrow} Status : ${status}`,
        //                                 `${emojis.arrow} nombres de joueurs en ligne : ${body.players.online}/ ${body.players.max}`,
        //                                 `${emojis.arrow} Joueurs In-Game : ${joueurs}`,
        //                                 `${emojis.arrow} Version : ${body.version.name}`,
        //                             ].join('\n')
        //                         })
        //                 }
        //             });
        //         } catch (error) {
        //             console.error(error);
        //         }

        //             try {
        //                 request('https://eu.mc-api.net/v3/server/ping/Nanapiou.aternos.me%3A38383', { json: true }, (err, res, body) => {
        //                     if (err) { return console.log(err); }
        //                     if (body.version == undefined) return;
        //                     let status = "error"
        //                     let joueurs = "aucun"
        //                     if (body.version.protocol == 46) {
        //                         status = "❌"
        //                         Responseembed2.spliceFields([0], 1,
        //                             {
        //                                 name: "**__Serveur 2 (Survie Moddé)  :__**",
        //                                 value: [
        //                                     `${emojis.arrow} Status : ${status}`,
        //                                     `${emojis.arrow} Ip : ${body.dns.ip}`,
        //                                     `${emojis.arrow} Port : ${body.dns.port}`,

        //                                 ].join('\n')
        //                             })


        //                     }
        //                     else if (body.version.protocol == 758) {
        //                         status = "✅"
        //                         if (body.players.sample  !== undefined) {
        //                             joueurs = body.players.sample.map(player => player.name).join(' ')
        //                         }

        //                         Responseembed2.spliceFields([0], 1,
        //                             {
        //                                 name: "**__Serveur 2 (Survie Moddé)  :__**",
        //                                 value: [
        //                                     `${emojis.arrow} Status : ${status}`,
        //                                     `${emojis.arrow} nombres de joueurs en ligne : ${body.players.online}/ ${body.players.max}`,
        //                                     `${emojis.arrow} Joueurs In-Game : ${joueurs}`,
        //                                     `${emojis.arrow} Version : ${body.version.name}`,
        //                                 ].join('\n')
        //                             })
        //                     }

        //                 });

        //             } catch (error) {
        //                 console.error(error);
        //             }

        //                 msg.edit({ embeds: [embed, Responseembed1, Responseembed2] })

        //             }, 180000)

        // })

        // console.log(client.guilds.cache.get('935921874653814844').members.cache.filter(u => u.presence !== null && !u.user.bot).size);
        client.guilds.cache.forEach(guild => console.log(guild.name))
        client.user.setActivity("!help", { type: `WATCHING` });

    }

}




