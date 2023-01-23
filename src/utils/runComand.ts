import { exec } from 'child_process';
import { CLI_SHORT_NAME } from '../constants/constants.js';

export function runComand(comand: string) {
	exec(`${CLI_SHORT_NAME} ${comand}`, (err, stdout, stderr) => {
		if (err) {
			console.error(stderr);
			return;
		}
		console.log(stdout);
	});
}
