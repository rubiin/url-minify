import fetch from 'node-fetch';

const ValidProviders: Record<string, string> = {
	isgd: 'https://is.gd/create.php?format=simple&url=',
	cdpt: 'https://cdpt.in/shorten?url=',
};

type providers = 'isgd' | 'cdpt';

interface IOptions {
	provider: providers;
}

export default async (
	url: string,
	option: IOptions = { provider: 'isgd' },
): Promise<string> =>{
	try {
		const response = await fetch(ValidProviders[option.provider] + url);

   const data = await response.text();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}


