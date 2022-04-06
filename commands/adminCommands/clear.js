const Discord = require("discord.js");

module.exports = {
  name: "clear",
  description: "permet de supprimer des messages",

  run: async (client, message, args) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      // let args = message.content.trim().split(/ +/g);

      if (args[0]) {
        if (!isNaN(args[0]) && args[0] >= 0 && args[0] <= 99) {
          message.delete();
          message.channel.bulkDelete(args[0], true);
          // .catch(err => {
          //     console.log(err)
          //     if(err) return message.channel.send("Les messages datent de plus de 14 jours !")}).then(mess => setTimeout(async () => {mess.delete()}, 5000))
          const imagebot =
            "https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png";
          id = message.author.avatarURL();
          const embed = new Discord.MessageEmbed()
            .setTitle(
              message.author.username + ` a supprimé ${args[0]} messages !`
            )
            .setColor("#0080ff")
            .setAuthor({
              name: message.author.username,
              iconURL: message.author.avatarURL(),
            })
            .setFooter({ text: "InfinityBot", iconURL: imagebot })
            .setTimestamp();
          message.channel
            .send({ embeds: [embed] })
            .then((mess) => setTimeout(() => mess.delete(), 5000));
        } else {
          message
            .reply(`Vous devez indiquer une valeur entre 1 et 99 !`)
            .then((message) => setTimeout(() => message.delete(), 5000));
        }
      } else {
        message
          .reply(`Vous devez indiquer un nombre !`)
          .then((mess) => setTimeout(() => mess.delete(), 5000));
      }
    } else {
      message
        .reply(
          `Vous devez avoir la permission de gérer les messages pour pouvoir éxécuter la commande !`
        )
        .then((msg) => setTimeout(() => msg.delete(), 5000));
    }
  },
};
