const BASE_URL = `http://localhost:3000`

const SITES_URL = `${BASE_URL}/sites`

const SIGNIN_URL = `${BASE_URL}/signin`
const VALIDATE_URL = `${BASE_URL}/validate`

const signin = (email, password) => {
    return post(SIGNIN_URL, {email, password})
}

const validate = () => {
    return get(VALIDATE_URL)
}

const getSites = () => {
    return get(SITES_URL)
}






// HELPER METHODS

const get = (url) => {
    return fetch(
        url,
        {
            headers: {
                Authorization: localStorage.getItem('token')
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
    validate
}

