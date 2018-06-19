import axios from 'axios' // Axios library voor de http client
import {verify, signToken} from './signatures'

export default axios.create({ // Genereer een speciale instantie die in de hele applicatie gebrui8kt wordt
  //baseURL: 'http://localhost:5000/', // Baseurl die we op dit moment niet gebruiken
  baseURL: 'http://back3ndb0is.herokuapp.com/', // Baseurl die we op dit moment niet gebruiken
  headers: { 
    "Content-Type": "application/json"
  },
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
          window.location.reload()
          throw new axios.Cancel('Dirty data found')
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
        const signature = signToken(JSON.stringify(data || {token: localStorage.getItem("_token")}), localStorage.getItem("_certificate")) // Sign de token met het certificaat
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