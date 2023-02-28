const Discord = require('discord.js');
const client = new Discord.Client
const redditFetch = require('reddit-fetch');

client.on('ready', () => {
  console.log('zooooooom!');
});

client.on('message', message => {
  if (message.content === 'booba') {
      redditFetch({
  
      subreddit: 'Overwatch_Porn',
      sort: 'hot',
      allowNSFW: true,
      allowModPost: true,
      allowCrossPost: true,
      allowVideo: true

}).then(post => {
    message.channel.send(`${message.author}, enjoy booba! ${post.url}`);
});

client.login('')