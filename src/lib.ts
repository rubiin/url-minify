import axios from 'axios';
import { responseMap } from './helper';
import { IOptions, IProviders, IResponse } from './types';

/**
 *
 *
 * @param {{ url: string; method: string }} provider
 * @param {string} longUrl
 * @return {*}
 */
const getAxios = (provider: IProviders, longUrl: string, option: IOptions) => {
	if (provider.method === 'get') {
		return axios.get(provider.url + longUrl, { timeout: option.timeout });
	} else {
		return axios.post(provider.url, provider.body(longUrl), {
			timeout: option.timeout,
		});
	}
};

const ValidProviders: Record<string, IProviders> = {
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
	'4hnet': {
		url: 'https://4h.net/api.php?url=',
		method: 'get',
	},

	// POST APIS

	tinube: {
		url: 'https://tinu.be/api/shorten',
		method: 'post',
		body: (val: string) => {
			return { longUrl: val };
		},
	},
};

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
	option: IOptions = { provider: 'isgd', timeout: 2000 },
): Promise<IResponse> => {
	try {
		const response = await getAxios(
			ValidProviders[option.provider],
			longUrl,
			option,
		);
		return responseMap(response, longUrl);
	} catch (error) {
		throw new Error(error);
	}
};
