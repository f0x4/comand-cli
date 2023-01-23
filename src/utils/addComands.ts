import { exec } from 'child_process';
import { createCommand } from 'commander';
import { getComands } from './getComands.js';

const { comands } = getComands();

export function addComands(program: any) {
	if (Object.entries(comands).length === 0) return;

	for (const comandKey in comands) {
		const action = () => {
			exec(comands[comandKey], (err, stdout, stderr) => {
				if (err) {
					console.error(stderr);
					return;
				}
				console.log(stdout);
			});
		};

		const comand = createCommand(comandKey)
			.description(comands[comandKey])
			.action(action);

		program.addCommand(comand);
	}
}
