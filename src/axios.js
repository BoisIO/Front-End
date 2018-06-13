import axios from 'axios'
import crypto from 'crypto'

import { throttleAdapterEnhancer, cacheAdapterEnhancer, Cache } from 'axios-extensions'

function signToken(token, contents) {
  if(!token) return false

  let sign = crypto.createSign('RSA-SHA256')
  sign.write(token)
  sign.end()
  return sign.sign(contents, 'hex')
}

export default axios.create({
	baseURL: '/',
  headers: { 
    'Cache-Control': 'no-cache',
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter, {enabledByDefault:true, defaultCache: new Cache({maxAge: 1000*60*60})})), //require, basic adapter
  transformResponse: [function (data, headers) {
    if(headers.Token !== undefined) localStorage.setItem("_token", headers.Token)
    if(headers.token !== undefined) localStorage.setItem("_token", headers.token)
    return data
  }],
  transformRequest: [function(data, headers) {
    if(localStorage.getItem("_token") !== null) {
      axios.defaults.headers.Token = localStorage.getItem("_token")
      axios.defaults.headers.Signature = signToken(localStorage.getItem("_token"), localStorage.getItem("_certificate"))
      axios.defaults.headers.Name = localStorage.getItem("_username") 
    }
    return data
  }]
})