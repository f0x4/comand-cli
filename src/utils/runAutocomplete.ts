import inquirer from 'inquirer';
import inquirerPrompt from 'inquirer-autocomplete-prompt';
import { getComands } from './getComands.js';
import { runComand } from './runComand.js';

const { comands } = getComands();

export function runAutocomplete() {
	inquirer.registerPrompt('autocomplete', inquirerPrompt);

	inquirer
		.prompt({
			type: 'autocomplete',
			name: 'comand',
			suggestOnly: true,
			message: 'c',
			prefix: '',
			loop: false,
			searchText: 'Searching...',
			emptyText: 'Nothing found.',
			source: filterComands,
			pageSize: 5,
			validate(val) {
				return val ? true : 'Type something.';
			}
		})
		.then(answers => {
			runComand(answers.comand);
		});
}

function filterComands(answers, input = '') {
	return new Promise(resolve => {
		resolve(
			Object.keys(comands).filter(function (str) {
				return str.indexOf(input) !== -1;
			})
		);
	});
}
