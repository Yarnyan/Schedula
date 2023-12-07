import axios from 'axios'

const apiLink = "https://jsonplaceholder.typicode.com/"

const POST = async (link, data) => {
    try {
        const response = await axios.post(apiLink + link, data, {
            headers: {
                'ngrok-skip-browser-warning': 'any',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response.data
    } catch (error) {
        return error
    }
}

const PUT = async (link, params, data) => {
    try {
        const response = await axios.put(apiLink + link, data, {
            headers: {
                'ngrok-skip-browser-warning': 'any',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response.data
    } catch (error) {
        return error
    }
}

async function GET(link, params) {
    try {
        let response = await axios.get(apiLink + link + '?' + params, {
            headers: {
                'ngrok-skip-browser-warning': 'any',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return response.data;
    } catch (error) {
        return error
    }
}

async function DELETE(link, params) {
    try {
        let response = await axios.delete(apiLink + link + '?' + params, {
            headers: {
                'ngrok-skip-browser-warning': 'any',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return response.data
    } catch (error) {
        return error
    }
}

export function signUp(formData) {
    return POST('/posts', formData)
  } 
  