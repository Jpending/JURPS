import config from '../config'
import TokenService from './Token-service'

const CharacterService = {
  getAllCharacters() {
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
  getCharsForUser(userid) {
    return fetch(`${config.API_ENDPOINT}/Users/${userid}/Characters`, {
      headers: {

        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      ).catch(error => {
        console.error({ error })
      })
  },
  postChar(newChar, userid) {
    return fetch(`${config.API_ENDPOINT}/Users/${userid}/Characters`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: newChar.json
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      ).catch(error => {
        console.error({ error })
      })
  },
  patchChar(editedChar, charId) {
    console.log(JSON.stringify(editedChar))
    return fetch(`${config.API_ENDPOINT}/Characters/${charId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(editedChar),
    })
      .then(res =>
        (!res.ok)
          ? res.json()
            .then(e => Promise.reject(e)) : res.json())
      .catch(error => {
        console.error({ error })
      })
  }
}

export default CharacterService
