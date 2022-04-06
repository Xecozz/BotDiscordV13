const Discord = require("discord.js");
const { run } = require("../../events/commandEvent/command");

module.exports = {
  name: "annonce",
  description: "permet d'ajouter une annonce",

  run: async (client, message, args) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      const imagebot =
        "https://s2.coinmarketcap.com/static/img/coins/200x200/9603.png";
      message.delete();
      var avatar = message.author.avatarURL();
      const txt = message.content.split(" ");
      txt.splice(0, 1);
      var idauthor = message.author.username;
      const embed = new Discord.MessageEmbed()
        .setTitle("Annonce de " + message.author.username + ":")
        .setColor("#0080ff")
        .setAuthor({
          name: message.author.username,
          iconURL: message.author.avatarURL(),
        })
        .setDescription(txt.join(" "))
        .setFooter({ text: "InfinityBot", iconURL: imagebot })
        .setTimestamp();

      message.channel.send({ embeds: [embed] });
    }
  },
};
