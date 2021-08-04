import axios from 'axios';
import { responseMap } from './helper';

interface IResponse {
	longUrl: string;
	shortUrl: string;
}

const getAxios = (
	provider: { url: string; method: string },
	longUrl: string,
) => {
	if (provider.method === 'get') {
		return axios.get(provider.url + longUrl);
	} else {
		return axios.post(provider.url, {
			longUrl: longUrl,
		});
	}
};

const ValidProviders: Record<string, any> = {
	isgd: {
		url: 'https://is.gd/create.php?format=simple&url=',
		method: 'get',
	},
	kroom: {
		url: 'https://www.kroom.tk/short?url=',
		method: 'get',
	},
	tinyurl: {
		url: 'https://tinyurl.com/api-create.php?url=',
		method: 'get',
	},
	cdpt: {
		url: 'https://cdpt.in/shorten?url=',
		method: 'get',
	},

	// shrtco: {
	// 	url: 'https://api.shrtco.de/v2/shorten?url=',
	// 	method: 'get',
	// 	response: 'json',
	// },
};

type providers = 'isgd' | 'cdpt' | 'kroom' | 'tinyurl';

interface IOptions {
	provider: providers;
}

export default async (
	longUrl: string,
	option: IOptions = { provider: 'isgd' },
): Promise<Record<string, string>> => {
	try {
		const response = await getAxios(
			ValidProviders[option.provider],
			longUrl,
		);
		return responseMap(
			response.data,
			response.headers['content-type'].split(';')[0],
			longUrl,
		);
	} catch (error) {
		throw new Error(error);
	}
};
