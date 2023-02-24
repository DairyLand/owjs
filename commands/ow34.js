const Discord = require('discord.js');
const api = require('imageapi.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('vrooom vroom');
});

client.on('message', async msg => {
	if (msg.content === '$34') {
		const subreddits = [
			'Overwatch_Porn',
			'NSFW_Mercy',
		];
		const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))];

		const img = await api(subreddit);

		const Embed = new Discord.MessageEmbed()
			.setTitle('wow booba')
			.setURL('https://www.reddit.com/r/Overwatch_Porn')
			.setColor('random')
			.setImage(img);
		msg.channel.send(Embed);
	}
});

client.login('');