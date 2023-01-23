import * as fs from 'fs';
import { comandsPath } from '../constants/constants.js';

function comandsFilleExists() {
	if (!fs.existsSync(comandsPath))
		throw new Error('Сommands file not found.');
}

function parseComands(): string {
	try {
		const data = fs.readFileSync(comandsPath, 'utf8');
		const comands: any = JSON.parse(data);
		return comands;
	} catch (err) {
		throw new Error('Error reading comands file.');
	}
}

export function getComands() {
	comandsFilleExists();
	const comands: any = parseComands();
	return { comands };
}
