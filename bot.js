const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("547424475881144321")
setInterval(function() {
channel.send(`احبكم احبكم 1الف :heart: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);