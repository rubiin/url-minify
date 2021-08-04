import axios from 'axios';
import { IResponse, responseMap } from './helper';

/**
 *
 *
 * @param {{ url: string; method: string }} provider
 * @param {string} longUrl
 * @return {*}
 */
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

/**
 *
 *
 * @interface IOptions
 */
interface IOptions {
	provider: providers;
}

/**
 *
 *
 * @export
 * @param {string} longUrl
 * @param {IOptions} option
 * @return {IResponse}
 */
export default async (
	longUrl: string,
	option: IOptions = { provider: 'isgd' },
): Promise<IResponse> => {
	try {
		const response = await getAxios(
			ValidProviders[option.provider],
			longUrl,
		);
		return responseMap(
			response,
			response.headers['content-type'].split(';')[0],
			longUrl,
		);
	} catch (error) {
		throw new Error(error);
	}
};
