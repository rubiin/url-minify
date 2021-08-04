/**
 *
 *
 * @interface IResponse
 */
export interface IResponse {
	longUrl: string;
	shortUrl: string;
}

/**
 *
 *
 * @export
 * @param {Record<any, any>} response
 * @param {string} responseType
 * @param {string} longUrl
 * @return {*}  {IResponse}
 */
export function responseMap(
	response: Record<any, any>,
	longUrl: string,
  provider: any
): IResponse {
	const responseType = response.headers['content-type'].split(';')[0];
	if (responseType === 'text/plain' || responseType === 'text/html') {
		return { longUrl, shortUrl: response.data };
	} else {
		if (response.data?.url) {
			return { longUrl, shortUrl: response.data.url };
		} else if (response.data?.shortUrl) {
			return { longUrl, shortUrl: response.data.shortUrl };
		} else if (response.data?.shortenedUrl) {
			return { longUrl, shortUrl: response.data.shortenedUrl };
		} else if (response.data?.short) {
			return { longUrl, shortUrl: response.data.short };
		}
	}
}
