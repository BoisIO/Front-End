import axios from 'axios' // Axios library voor de http client
import crypto from 'crypto' // Crypto library voor het signen

import { throttleAdapterEnhancer, cacheAdapterEnhancer, Cache } from 'axios-extensions' // Enhancers voor cache en throttling

// eslint-disable-next-line
var certificate = '-----BEGIN CERTIFICATE-----\nMIID6jCCAtKgAwIBAgIJAJt9ZmyOUKtvMA0GCSqGSIb3DQEBCwUAMIGJMQswCQYD\nVQQGEwJOTDEWMBQGA1UECAwNTm9vcmQtQnJhYmFudDEOMAwGA1UEBwwFQnJlZGEx\nDzANBgNVBAoMBkJvaXNJTzEPMA0GA1UECwwGU2VydmVyMQ8wDQYDVQQDDAZTZXJ2\nZXIxHzAdBgkqhkiG9w0BCQEWEHNlcnZlckBib2lzaW8ubmwwHhcNMTgwNjExMDgy\nNzAzWhcNMTkwNjExMDgyNzAzWjCBiTELMAkGA1UEBhMCTkwxFjAUBgNVBAgMDU5v\nb3JkLUJyYWJhbnQxDjAMBgNVBAcMBUJyZWRhMQ8wDQYDVQQKDAZCb2lzSU8xDzAN\nBgNVBAsMBlNlcnZlcjEPMA0GA1UEAwwGU2VydmVyMR8wHQYJKoZIhvcNAQkBFhBz\nZXJ2ZXJAYm9pc2lvLm5sMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n5XBu3U0qOVNAZczp9C0ayxZ00taHjYRvZqXqfr6VNt+IugDMbT95cAL94d4\/iqV9\nLhkMkhy4Q7JcH2s+pTLacox+OKJJIjw8jUYghTTOoaR9OcGuVI0AJtuJ2KIo\/zCq\nTcqVJintghA\/LoIzrr0i5Ib4V1FaUXQwQU\/az8Wabir21\/vRHc7RpzVUDWGYbrc5\nYGEchIYpalmUQqZelrqQiS82wFvJRTednGVL0rySMPUbaxjfI41O6m5WtomFpfEJ\nKo\/21HIuqVcldzu8RuCMsjHSnWJJm\/8iwLSGq8\/WGtiqgOAgRkJ+VJm03qQAu0C8\ngpyeXoMB9uZqqbGkx91pHwIDAQABo1MwUTAdBgNVHQ4EFgQU9\/QcuJGs5pwz+iI\/\n1iXKHHxAj0wwHwYDVR0jBBgwFoAU9\/QcuJGs5pwz+iI\/1iXKHHxAj0wwDwYDVR0T\nAQH\/BAUwAwEB\/zANBgkqhkiG9w0BAQsFAAOCAQEAp9IwJ1QcU600WHVGkc6CKF43\nC9NmOsizTAGrtBlnH+T8wJuWZIl08qD2qYkd2qO9faKkp+0eivVSjjZVETqwsp\/B\nUhFw2YveS2dGdxSPdxZRhBXRA\/zVENbviDQj0qET5GMvGTwRFICTcYRTyE8Bsr0Z\nlwnlwL87l\/rgJvAiSe4wJO4DsLCdF6FJHv8+HJX\/cbJI0EBynJT3G6SFewT7B5\/b\nB1\/jGYqVPagqAXuQjzjaGszacaAnsf3narsL+KjfnLo6aKJw8Q2Jwi8M2VMC7MyA\n+Ts\/o\/zPNSgfWuBNe\/O+RwZAyfsfpR9eXlWoTLY9Cy6zfu6dQ\/aJyCe8FQpRYA==\n-----END CERTIFICATE-----\n';

function signToken(data, certificate) { // Functie om datas te signen
  if(!data) return false // Om te voorkomen dat alles vastloopt als de data leeg is

  let sign = crypto.createSign('RSA-SHA256') // De sign instantie
  sign.write(data) // Het token wordt gesigned 
  sign.end() 
  return sign.sign(certificate, 'hex') // De signature wordt teruggestuurd
}

function verify(data, signature) {
  let verify = crypto.createVerify("RSA-SHA256");
  verify.update(data);
  return verify.verify(certificate, signature, 'hex');
}

export default axios.create({ // Genereer een speciale instantie die in de hele applicatie gebrui8kt wordt
  baseURL: 'http://localhost:5000/', // Baseurl die we op dit moment niet gebruiken
  //baseURL: 'http://back3ndb0is.herokuapp.com/', // Baseurl die we op dit moment niet gebruiken
  headers: {
    "Content-Type": "application/json"
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter, {enabledByDefault:false, defaultCache: new Cache({maxAge: 1000*60*60})})), //Adapters en caching
  transformResponse: [function (data, headers) { // De 'interceptor' die ons helpt standaard een response te manipuleren
    //console.table({type:"response", oldtoken: localStorage.getItem("_token"), newtoken: headers.token}) // Om te loggen bij het debuggen
    if(headers.Token) localStorage.setItem("_token", headers.Token) // Mits er een token in de header zit dan zetten wij die in localstorage
    if(headers.token) localStorage.setItem("_token", headers.token) // In het geval dat de back-end boys weer iets fout doen met hoofdletters
    try {
      JSON.parse(data)
      if(headers.signature && headers.signature !== null && headers.signature !== undefined) {
        if(verify(data, headers.signature)) {
          return JSON.parse(data)
        } else {
          alert("Something went wrong while verifiying the serverdata!")
          return JSON.parse(data)
        }
      } else {
        return JSON.parse(data) // Parse de data als json / js
      }
    }
    catch (e) {
      return data // Indien dat niet ging geven we gewoon de data los terug
    }
  }],
  transformRequest: [function(data, headers) { // De 'interceptor' voor de request
    if(localStorage.getItem("_token")) { // Indien er een token staat in localstorage
      headers.Token = localStorage.getItem("_token") // Verander de header van de request want wij hebben dit token nodig
      if(localStorage.getItem("_certificate")) { // Kijk of er een certificaat beschikbaar is
        const signature = signToken(JSON.stringify(data || {}), localStorage.getItem("_certificate")) // Sign de token met het certificaat
        headers.Name = localStorage.getItem("_username")  // De gebruikersnaam
        headers.Signature = signature  // De signature
        return JSON.stringify(data) // Verzend de data als json
      } else {
        return JSON.stringify(data) // Verzend de data als json
      }
    } else {
      return JSON.stringify(data); // Verzend de data als json
    }
  }]
})