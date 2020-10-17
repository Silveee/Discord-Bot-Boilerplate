'use strict';

module.exports = {
	testing: 'test',
	test: ({ channel }) => {
		channel.send('hi');
	},
};