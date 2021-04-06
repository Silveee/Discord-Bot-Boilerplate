'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

const REQUIRED_CONFIG_VALUES = ['BOT_TOKEN', 'COMMAND_CHAR']

if (!fs.existsSync('./.config.yml')) {
	console.log('.config.yml does not exist. Copying .sample-config.yml into .config.yml');
	fs.copyFileSync('.sample-config.yml', '.config.yml', fs.constants.COPYFILE_EXCL);
}

class RequiredConfigNotProvidedError extends Error {}

const config = yaml.load(fs.readFileSync('./.config.yml', 'utf8'));

for (const REQUIRED_VALUE of REQUIRED_CONFIG_VALUES) {
	if (!(REQUIRED_VALUE in config)) {
		throw new RequiredConfigNotProvidedError(`Configurable value '${REQUIRED_VALUE}' must be provided.`)
	}
}

module.exports = config;