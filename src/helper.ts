export function responseMap(
	response: Record<any, any>,
	responseType: string,
	longUrl: string,
): Record<string, any> {
	if (responseType === 'text/plain' || responseType === 'text/html') {
		return { longUrl, shortUrl: response };
	} else {
    if(response?.url){
      return { longUrl, shortUrl: response.url };
    }
	}
}
