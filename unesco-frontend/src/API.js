const BASE_URL = `http://localhost:3000`
const SITES_URL = `${BASE_URL}/sites`
const USERS_URL = `${BASE_URL}/users`
const SIGNIN_URL = `${BASE_URL}/signin`
const SIGNUP_URL = `${BASE_URL}/signup`
const VALIDATE_URL = `${BASE_URL}/validate`


const signin = (email, password) => {
    return post(SIGNIN_URL, {email, password})
}

const validate = () => {
    return getWithAuth(VALIDATE_URL)
}

const signup = (formData) => {
    return post(SIGNUP_URL, formData)
}

const getSites = () => {
    return getWithoutAuth(SITES_URL)
}

const getSite = (id) => {
    let url = `${SITES_URL}/${id}`
    return getWithoutAuth(url)
}

const getSavedSites = (user_id) => {
    let url = `${USERS_URL}/${user_id}/saved`
    return getWithAuth(url)
}


// HELPER METHODS

const getWithoutAuth = (url) => {
    return fetch(url).then(resp => resp.json())
}

const getWithAuth = (url) => {
    return fetch(
        url,
        { 
            headers: {
                "Authorization": localStorage.getItem('token')
            } 
        }
    ).then(resp => resp.json())
}

const post = (url, data) => {
    let configObject = generateConfigObject("POST", data);
    return fetch(url, configObject).then(resp => resp.json())
}

const generateConfigObject = (method, data) => {
    return {
        method: method, 
        headers: {
            'Content-Type': 'application/json'
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
    getSavedSites
}

