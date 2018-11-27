const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", async message => {
	const args = message.content.slice(config.prefix.length).trim().split(/ !/g);
	const command = args.shift().toLowerCase();
	if(message.author.bot) return;
    message.reply(`test2`);
	if (command === "kick") {
   	 	let member = @ErisBot#1777;
   	 	let reason = args.slice(1).join(' ');
    		member.kick(reason)
      	.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
		message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  }
});
client.login("");
