export const API_URL = 'https://mydiarylive-api.herokuapp.com/api/v1';

export const DEFAULT_HEADERS = new Headers({
    'Accept':'application/json',
    'Content-Type':'application/json; charset=UTF-8'
})

export const HEADERS_WITH_TOKEN = new Headers({
    'Accept':'application/json',
    'Content-Type':'application/json; charset=UTF-8',
    'access-token':`${localStorage.getItem('Token')}`,
})
