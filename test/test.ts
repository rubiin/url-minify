import tweeny from '../src/lib';

beforeAll(() => jest.setTimeout(1000 * 1000));

describe('should get a shortened url', () => {
	it('should get shortened url with is.gd', async () => {
		await expect(
			tweeny('www.google.com', { provider: 'isgd' }),
		).resolves.toMatch(/^https:\/\/is.gd\//);
	});

	it('should get shortened url with cdpt.in', async () => {
		await expect(
			tweeny('www.google.com', { provider: 'cdpt' }),
		).resolves.toMatch(/^https:\/\/cdpt.in\//);
	});


});
