import minify from '../src/lib';

const url = 'https://rubiin.vercel.app';

beforeAll(() => jest.setTimeout(10000 * 1000));

describe('should get a shortened url', () => {
	it('should get shortened url with is.gd', async () => {
		const response = await minify(url, { provider: 'isgd' });
		expect(response.shortUrl).toMatch(/^https:\/\/is.gd\//);
	});

	it('should get shortened url with cdpt.in', async () => {
		const response = await minify(url, { provider: 'cdpt' });
		expect(response.shortUrl).toMatch(/^https:\/\/cdpt.in\//);
	});

	it('should get shortened url with tinyurl.com', async () => {
		const response = await minify(url, { provider: 'tinyurl' });
		expect(response.shortUrl).toMatch(/^https:\/\/tinyurl.com\//);
	});

	it('should get shortened url with kroom.tk', async () => {
		const response = await minify(url, { provider: 'kroom' });
		expect(response.shortUrl).toMatch(/^www.kroom.tk\//);
	});

  	it('should get shortened url with 4h.net', async () => {
		const response = await minify(url, { provider: '4hnet' });
			expect(response.shortUrl).toMatch(/^https:\/\/4h.net\//);
	});

	it('should get shortened url with tinu.be', async () => {
		const response = await minify(url, { provider: 'tinube' });
		expect(response.shortUrl).toMatch(/^https:\/\/tinu.be\//);
	});
});
