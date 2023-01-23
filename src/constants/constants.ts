import { name, version, description } from '../../package.json';

export const CLI_NAME = name;
export const CLI_SHORT_NAME = 'c';
export const CLI_VERSION = version;
export const CLI_DESCRIPTION = description;

export const COMANDS_FILE_NAME = 'comands';
export const executableDir = process.cwd();
export const comandsPath = executableDir + `/${COMANDS_FILE_NAME}.json`;
