const BASE_URL = `http://localhost:3000`
const SITES_URL = `${BASE_URL}/sites`
const USERS_URL = `${BASE_URL}/users`
const SIGNIN_URL = `${BASE_URL}/signin`
const SIGNUP_URL = `${BASE_URL}/signup`
const VALIDATE_URL = `${BASE_URL}/validate`
const SAVED_SITES_URL = `${BASE_URL}/saved_sites`

// SITE MANAGEMENT

const getSites = () => {
  return getWithoutAuth(SITES_URL)
}

const getSite = id => {
  const url = `${SITES_URL}/${id}`
  return getWithoutAuth(url)
}

const getBucketlistSiteIds = (user_id) => {
    const url = `${USERS_URL}/${user_id}/bucketlist_site_ids`
    return getWithAuth(url)
}

const getBucketlist = (user_id) => {
    const url = `${USERS_URL}/${user_id}/bucketlist`
    return getWithAuth(url) 
}

const getVisitedSiteIds = (user_id) => {
    const url = `${USERS_URL}/${user_id}/visited_site_ids`
    return getWithAuth(url)
}

const getVisited = (user_id) => {
    const url = `${USERS_URL}/${user_id}/visited`
    return getWithAuth(url)
}


// AUTHENTICATION & AUTHORISATION

const signin = (email, password) => {
  return post(SIGNIN_URL, { email, password })
}

const validate = () => {
  return getWithAuth(VALIDATE_URL)
}

const signup = formData => {
  return post(SIGNUP_URL, formData)
}

// HELPER METHODS

const getWithoutAuth = url => {
  return fetch(url).then(resp => resp.json())
}

const getWithAuth = url => {
  return fetch(url, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(resp => resp.json())
}

const post = (url, data) => {
  let configObject = generateConfigObject('POST', data)
  return fetch(url, configObject).then(resp => resp.json())
}

const generateConfigObject = (method, data) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }
}

export default {
  signin,
  signup,
  validate,
  getSites,
  getSite,
  getBucketlistSiteIds,
  getBucketlist,
  getVisitedSiteIds,
  getVisited
}
