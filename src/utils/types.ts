export type LaunchOptionsType = {
	composeFilesDir: string;
	launchFile: string;
};

export type ComandsOptionsType = {
	comandsFile: string;
};

export type ConfigType = {
	launchOptions: LaunchOptionsType;
	comandsOptions: ComandsOptionsType;
};
