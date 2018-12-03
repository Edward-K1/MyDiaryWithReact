import { API_URL } from '../common';
import { toast } from 'react-toastify';
import { toggleLoader, showErrorMsg } from '../common/functions';
import { DEFAULT_HEADERS } from '../common';

const registerUser = async (user)=> {

    fetch(API_URL + '/auth/signup', {
        method: 'POST',
        headers:DEFAULT_HEADERS,
        body: JSON.stringify(user),
     })
     .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status,
        }))
      )
        .then(results => {
           if(results.status === 201){
               toast.success('Account Created Successfully',{
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar:true
              })
               setTimeout(function () {
                            window.location.replace('/login');
                            },1000);

           } else {
                let msg = JSON.stringify(results.data['message']['error'])
                showErrorMsg(msg);

           }
        })
        toggleLoader('loader-div');

}

export default registerUser;
