import axios from 'axios'
import { throttleAdapterEnhancer, cacheAdapterEnhancer, Cache } from 'axios-extensions'

export default axios.create({
	baseURL: '/',
  headers: { 
    'Cache-Control': 'no-cache'
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter, {enabledByDefault:true, defaultCache: new Cache({maxAge: 1000*60*60})})), //require, basic adapter
  transformRequest: [function (data, headers) {
    if(headers['Token'] !== undefined) axios.defaults.headers.Token = headers['Token'] || headers['token']
    return data
  }],
})