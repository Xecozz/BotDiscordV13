const Discord = require("discord.js");
const { run } = require("../../events/commandEvent/command");

module.exports = {
    name: "ban",
    description: "permet d'ajouter une annonce",

    run: async (client, message, args) => {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            let mention = message.mentions.members.first();

            if (mention == undefined) {
                message.reply("Membre non ou mal séléctionné");
            }
            if (mention.bannable) {
                mention.ban();
                message.channel.send(mention.id + "a été banni avec succès !");
            }
            else {
                message.reply("Impossible de bannir ce membre !");
            }

        }
    }
};