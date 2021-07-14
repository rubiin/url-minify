import axios from 'axios';

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
		const response = await axios.get(ValidProviders[option.provider] + url);
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
}
