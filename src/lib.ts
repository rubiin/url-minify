import fetch from 'node-fetch';

const ValidProviders: Record<string, string> = {
	isgd: 'https://is.gd/create.php?format=simple&url=',
	cdpt: 'https://cdpt.in/shorten?url=',
	shrtco: 'https://api.shrtco.de/v2/shorten?url=',
};

type providers = 'isgd' | 'cdpt' | 'shrtco';

interface IOptions {
	provider: providers;
}

export default async (
	url: string,
	option: IOptions = { provider: 'isgd' },
): Promise<string> => {
	try {
		const response = await fetch(ValidProviders[option.provider] + url);
		let data: string | PromiseLike<string>;
		if (['isgd', 'cdpt'].includes(option.provider)) {
			data = await response.text();
		} else {
			data = await response.json();
		}
		return data;
	} catch (error) {
		throw new Error(error);
	}
};
