export type providers =
	| 'isgd'
	| 'cdpt'
	| 'kroom'
	| 'tinyurl'
	| 'tinube'
	| '4hnet';

/**
 *
 *
 * @export
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
 * @interface IOptions
 */
export interface IOptions {
	provider?: providers;
	timeout?: number;
}

/**
 *
 *
 * @export
 * @interface IProviders
 */
export interface IProviders {
	url: string;
	method: string;
	body?: any;
  formData?: boolean;
}
