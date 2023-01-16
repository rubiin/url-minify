import axios from 'axios'

type providers =
| 'isgd'
| 'cdpt'
| 'vgd'
| '4hnet'
| 'tinube'
| 'rbgy'
| 'vurl'
| 'haha'
| 'pwm'
| 'cya'
| 'hideuri'
| 'tnyim'

/**
 *
 *
 * @interface IResponse
 */
interface IResponse {
  longUrl: string
  shortUrl: string
}

/**
 *
 *
 * @interface IOptions
 */
interface IOptions {
  provider: providers
  timeout?: number
}

/**
 *
 *
 *
 * @interface IProviders
 */
interface IProviders {
  url: string
  method: string
  body?: any
  formData?: boolean
}

/**
 *
 *
 * @param {Record<any, any>} response
 * @param {string} longUrl
 * @return {*}  {IResponse}
 */
function responseMap(response: Record<any, any>, longUrl: string, provider: providers): IResponse {
  const responseType = response.headers['content-type'].split(';')[0]
  if (!['text/plain', 'text/html'].includes(responseType)) {
    if (response.data?.url)
      return { longUrl, shortUrl: response.data.url }
    else if (response.data?.shortUrl)
      return { longUrl, shortUrl: response.data.shortUrl }
    else if (response.data?.shortenedUrl)
      return { longUrl, shortUrl: response.data.shortenedUrl }
    else if (response.data?.short)
      return { longUrl, shortUrl: response.data.short }
    else if (response.data?.short_url)
      return { longUrl, shortUrl: response.data.short_url }
    else if (response.data?.result_url)
      return { longUrl, shortUrl: response.data.result_url }
  }

  if (['haha', 'pwm', 'cya'].includes(provider))
    return { longUrl, shortUrl: `https://${provider}.se/${response.data}` }

  return { longUrl, shortUrl: response.data }
}

/**
 *
 *
 * @param {{ url: string; method: string }} provider
 * @param {string} longUrl
 * @return {*}
 */
const getAxios = (provider: IProviders, longUrl: string, option: IOptions) => {
  if (provider.method === 'get') {
    return axios.get(provider.url + longUrl, { timeout: option.timeout })
  }
  else {
    return axios.post(provider.url, provider.body(longUrl), {
      timeout: option.timeout,
    })
  }
}

const ValidProviders: Record<string, IProviders> = {
  'isgd': {
    url: 'https://is.gd/create.php?format=simple&url=',
    method: 'get',
  },
  'cdpt': {
    url: 'https://cdpt.in/shorten?url=',
    method: 'get',
  },
  'vgd': {
    url: 'https://v.gd/create.php?format=simple&url=',
    method: 'get',
  },
  'haha': {
    url: 'https://www.haha.se/lank.php?dataLank=',
    method: 'get',
  },

  'cya': {
    url: 'https://www.haha.se/lank.php?dataLank=',
    method: 'get',
  },

  'pwm': {
    url: 'https://www.haha.se/lank.php?dataLank=',
    method: 'get',
  },

  'tnyim': {
    url: 'http://tny.im/yourls-api.php?action=shorturl&format=simple&url=',
    method: 'get',
  },

  '4hnet': {
    url: 'https://4h.net/api/?url=',
    method: 'get',
  },

  'vurl': {
    url: 'https://vurl.com/api.php?url=',
    method: 'get',
  },
  // POST APIS

  'tinube': {
    url: 'https://api.tinu.be/api/shorten',
    method: 'post',
    body: (val: string) => {
      return { longUrl: val }
    },
  },

  'hideuri': {
    url: 'https://hideuri.com/api/v1/shorten',
    method: 'post',
    body: (val: string) => {
      return { url: val }
    },
  },

  'rbgy': {
    url: 'https://free-url-shortener.rb.gy/shorten',
    method: 'post',
    body: (val: string) => {
      return { destination: val, dryRun: true }
    },
  },
}

/**
 *
 *
 * @export
 * @param {string} longUrl
 * @param {IOptions} option
 * @return {IResponse}
 */
const minify = async (
  longUrl: string,
  option: IOptions = { provider: 'isgd', timeout: 2000 },
): Promise<IResponse> => {
  const response = await getAxios(ValidProviders[option.provider], longUrl, option)
  return responseMap(response, longUrl, option.provider)
}

export default minify
