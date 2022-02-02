module.exports = {
    name : 'ping',
    description : "permet de savoir la latence du bot et de l'api",
    aliases:['p', 'h'],

    run : async (client, message, args) =>{
        message.channel.send(client.ws.ping.toString())
    }
}