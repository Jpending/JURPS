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
  getCharacter(id) {
    return fetch(`${config.API_ENDPOINT}/Users/${id}`, {
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
      )
  },
  postChar(newChar, userid) {
    return fetch(`${config.API_ENDPOINT}/Users/${userid}/Characters`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newChar)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  patchChar(editedChar, charId) {
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
  },
  deleteCharacter(char_id) {
    return fetch(`${config.API_ENDPOINT}/Characters/${char_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )

  },
}

export default CharacterService
