'use strict';

module.exports = {
	testing: 'test',
	test: (args, channel) => {
		channel.send('hi');
	},
};