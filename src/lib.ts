import fetch from 'node-fetch';

const getFetch = (provider: any, longUrl: string) => {
	return fetch(provider.url + longUrl, { method: provider.method });
};

const ValidProviders: Record<string, any> = {
	isgd: {
		url: 'https://is.gd/create.php?format=simple&url=',
		method: 'GET',
		response: 'text',
	},

	cdpt: {
		url: 'https://cdpt.in/shorten?url=',
		method: 'GET',
		response: 'text',
	},

	shrtco: {
		url: 'https://api.shrtco.de/v2/shorten?url=',
		method: 'GET',
		response: 'json',
	},
};

type providers = 'isgd' | 'cdpt' | 'shrtco';

interface IOptions {
	provider: providers;
}

export default async (
	longUrl: string,
	option: IOptions = { provider: 'isgd' },
): Promise<string> => {
	try {
		const response = await getFetch(
			ValidProviders[option.provider],
			longUrl,
		);
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
