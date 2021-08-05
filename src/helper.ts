import { IResponse } from './types';

/**
 *
 *
 * @export
 * @param {Record<any, any>} response
 * @param {string} longUrl
 * @return {*}  {IResponse}
 */
export function responseMap(
	response: Record<any, any>,
	longUrl: string,
): IResponse {
	const responseType = response.headers['content-type'].split(';')[0];
	if (['text/plain', 'text/html'].includes(responseType)) {
		return { longUrl, shortUrl: response.data };
	} else {
		// json response

		if (response.data?.url) {
			return { longUrl, shortUrl: response.data.url };
		} else if (response.data?.shortUrl) {
			return { longUrl, shortUrl: response.data.shortUrl };
		} else if (response.data?.shortenedUrl) {
			return { longUrl, shortUrl: response.data.shortenedUrl };
		} else if (response.data?.short) {
			return { longUrl, shortUrl: response.data.short };
		}
     else if (response.data?.short_url) {
			return { longUrl, shortUrl: response.data.short_url };
		}
	}
}
