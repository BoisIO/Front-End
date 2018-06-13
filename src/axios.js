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
    "Name": localStorage.getItem("_username"),
    "Signature": signToken(localStorage.getItem("Token"), localStorage.getItem("_certificate"))
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter, {enabledByDefault:true, defaultCache: new Cache({maxAge: 1000*60*60})})), //require, basic adapter
  transformRequest: [function (data, headers) {
    if(headers['Token'] !== undefined) axios.defaults.headers.Token = headers['Token'] || headers['token']
    localStorage.setItem("Token", axios.defaults.headers.Token)
    return data
  }],
})