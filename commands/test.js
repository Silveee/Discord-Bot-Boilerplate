'use strict';

module.exports = {
	testing: 'test', // Alias for test
	test: async ({ channel }) => {
		await channel.send('hi');
	}
};