const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embedInfo = new Discord.RichEmbed()
.setTitle("Komendy")
.addField("/ho/help", "Jesteś tutaj!")
.addField("/ho/role **rola**", "Dodaj sobię rolę")
.addField("/ho/delrole **rola**", "Usuń rolę")
.addField("/ho/pat @ktoś", "*pat pat*")
.setFooter("Pilnujemy porządku! T^T")
.setColor("#8f8ff1");


return message.channel.send(embedInfo);
}

module.exports.help = {
  name: "help"
}
