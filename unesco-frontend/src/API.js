const BASE_URL = `http://localhost:3000`

const USERS_URL = `${BASE_URL}/users`
const SIGNIN_URL = `${BASE_URL}/signin`
const SIGNUP_URL = `${BASE_URL}/signup`
const VALIDATE_URL = `${BASE_URL}/validate`

const SITES_URL = `${BASE_URL}/sites`
const TAGS_URL = `${BASE_URL}/tags`
const USER_BUCKETLISTS_URL = `${BASE_URL}/user_bucketlists`
const USER_VISITEDS_URL = `${BASE_URL}/user_visiteds`

const SEARCH_URL = `${BASE_URL}/sites/search`
const SEARCH_BY_TAG_URL = `${BASE_URL}/sites/search_by_tag`

// SITE MANAGEMENT

const getSites = () => {
  return getWithoutAuth(SITES_URL)
}

const getSite = id => {
  const url = `${SITES_URL}/${id}` 
  return getWithoutAuth(url)
}

const getSitesByRegion = region => {
  const url = `${SEARCH_URL}/region=${region.split(' ').join('+')}`
  return getWithoutAuth(url)
}

const search = query => {
  const url = `${SITES_URL}${query}`
  return getWithoutAuth(url)
}

const searchByTag = tag => {
  const url = `${SEARCH_BY_TAG_URL}/${tag}`
  return getWithoutAuth(url)
}

const getTags = () => {
  return getWithoutAuth(TAGS_URL)
}

// BUCKETLIST

const getBucketlistSiteIds = user_id => {
  const url = `${USERS_URL}/${user_id}/bucketlist_site_ids`
  return getWithAuth(url)
}

const getBucketlist = user_id => {
  const url = `${USERS_URL}/${user_id}/bucketlist`
  return getWithAuth(url)
}

const addToBucketlist = site_id => {
  return post(USER_BUCKETLISTS_URL, { site_id })
}

const removeFromBucketlist = site_id => {
  return destroy(USER_BUCKETLISTS_URL, { site_id })
}

// VISITED SITES

const getVisitedSiteIds = user_id => {
  const url = `${USERS_URL}/${user_id}/visited_site_ids`
  return getWithAuth(url)
}

const getVisited = user_id => {
  const url = `${USERS_URL}/${user_id}/visited`
  return getWithAuth(url)
}

const addToVisited = site_id => {
  return post(USER_VISITEDS_URL, { site_id })
}

const removeFromVisited = site_id => {
  return destroy(USER_VISITEDS_URL, { site_id })
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

const destroy = (url, data) => {
  let configObject = generateConfigObject('DELETE', data)
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
  getSitesByRegion,
  search,
  getBucketlistSiteIds,
  getBucketlist,
  addToBucketlist,
  removeFromBucketlist,
  getVisitedSiteIds,
  getVisited,
  addToVisited,
  removeFromVisited,
  searchByTag,
  getTags
}
