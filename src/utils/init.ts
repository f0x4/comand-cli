import welcome from 'cli-welcome';
import {
	CLI_DESCRIPTION,
	CLI_NAME,
	CLI_VERSION
} from '../constants/constants.js';

export const init = () => {
	welcome({
		title: CLI_NAME,
		tagLine: `by f0x4`,
		description: CLI_DESCRIPTION,
		version: CLI_VERSION,
		bgColor: '#35508a',
		color: '#000000',
		bold: true,
		clear: true
	});
};
