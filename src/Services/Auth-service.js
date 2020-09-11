import config from '../config'


const AuthService = {

  postLogin(credentials) {
    //console.log(credentials)
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch(error => {
        console.error({ error })
      })
  },
  postRegister(newcredentials) {
    console.log(newcredentials)
    return fetch(`${config.API_ENDPOINT}/Users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newcredentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      ).catch(error => {
        console.error({ error })
      })
  },
}

export default AuthService
