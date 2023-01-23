import { program } from 'commander';
import {
	CLI_DESCRIPTION,
	CLI_SHORT_NAME,
	CLI_VERSION
} from '../constants/constants.js';
import { addComands } from '../utils/addComands.js';
import { init } from '../utils/init.js';
import { runAutocomplete } from '../utils/runAutocomplete.js';

export function run() {
	program
		.name(CLI_SHORT_NAME)
		.description(CLI_DESCRIPTION)
		.version(CLI_VERSION)
		.action(() => {
			init();
			runAutocomplete();
		});

	addComands(program);

	program.parse();
}
