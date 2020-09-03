import config from '../config'
import TokenService from './Token-service'

const CharacterService = {
  getThings() {
    return fetch(`${config.API_ENDPOINT}/Characters`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getChar(charId) {
    return fetch(`${config.API_ENDPOINT}/Characters/${charId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default CharacterService
