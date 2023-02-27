const { WebhookClient } = require('discord.js');

module.exports = {
	name: 'webhook',
	run: async (client, message, args) => {
		const wc = new WebhookClient('1079583237690630234', 'F9GYvCuSL1NDBk12fJW_0GPID7c-wD-v0oGuRM8rAu7ptPTS17fTCtGQra75PtacHsnk')
		
		wc.send()
	}
}

