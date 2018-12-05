import { API_URL } from '../common';
import { toast } from 'react-toastify';
import { toggleLoader } from '../common/functions';
import { HEADERS_WITH_TOKEN} from '../common';


export const getEntries = async () =>{

    const response = await fetch(API_URL + '/entries', {
        method: 'GET',
        headers:HEADERS_WITH_TOKEN,
     })
    return response.json();
     
}

export const getEntry = async(entryId) => {
    const response = await fetch(API_URL + `/entries/${entryId}`, {
        method: 'GET',
        headers:HEADERS_WITH_TOKEN,
     });

    return response.json();

}

export const deleteEntry = async (eid) => {

    const response = await fetch(API_URL + `/entries/${eid}`, {
        method: 'DELETE',
        headers:HEADERS_WITH_TOKEN,
     })
    return response.json();

}

export const createEntry = async(entry) => {
    const response = await fetch(API_URL + '/entries', {
        method: 'POST',
        headers: HEADERS_WITH_TOKEN,
        body: JSON.stringify(entry)
     })

}

export const updateEntry = async(entry, entryId) => {

    const response = await fetch(API_URL + `/entries/${entryId}`, {
        method: 'PUT',
        headers:HEADERS_WITH_TOKEN,
        body: JSON.stringify(entry)
     })

}