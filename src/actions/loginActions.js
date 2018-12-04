import { API_URL } from '../common';
import { toggleLoader, showErrorMsg } from '../common/functions';
import { DEFAULT_HEADERS } from '../common';

const loginUser =(credentials)=> {

    fetch(API_URL + '/auth/login', {
        method: 'POST',
        headers:DEFAULT_HEADERS,
        body: JSON.stringify(credentials),
     })
     .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status,
        }))
      )
      .then(results => {
        if(results.status === 200){
            localStorage.setItem("Token", results.data['access-token'])
            window.location.replace('/home')

        }else{
            let msg ="Invalid login Credentials";
            showErrorMsg(msg, 1500);
            toggleLoader('loader-div');
            }

     })

}

export default loginUser;
