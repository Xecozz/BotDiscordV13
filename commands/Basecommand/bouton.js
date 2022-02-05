// const Discord = require("discord.js")

// module.exports =  ({
//     name : 'bouton',
//     description : "permet d'appeller la fct buton",

//     run : async(client, message, interaction, args)=>{
//     var row = new Discord.MessageActionRow()
//         .addComponents(new Discord.MessageButton()
//             .setCustomId("bouton1")
//             .setLabel("J'veux une disquette direct !")
//             .setStyle("SUCCESS")
//             .setEmoji("🌹")
//         )

//      const msg = await message.channel.send({content: "Si tu veux séduire ton coup de cœur, ce bouton est fait pour toi 👀", components: [row]});
//      var tableau = [
//         "D'habitude j'suis très bon nageur mais là j'comprends pas je me noie dans tes yeux ✨",
//         "test", 
//         "test1",
//         "test2",
//         "test3",
//         "test4"
//     ]
//     var reponsearray = Math.floor(Math.random()*tableau.length)
//     const value = tableau[reponsearray]
    
//      var filter= (interaction) => interaction.customId === "bouton1";
//      msg.awaitMessageComponent({filter})
//          .then(interaction => interaction.reply(value))
//          .catch(console.error);

// }
    

// });


