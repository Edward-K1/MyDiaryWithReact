import { API_URL } from '../common';
import { toast } from 'react-toastify';
import { toggleLoader } from '../common/functions';

const loginUser =(credentials)=> {
    
    let appHeaders = new Headers({
        'Accept':'application/json',
        'Content-Type':'application/json; charset=UTF-8'
    })


    fetch(API_URL + '/auth/login', {
        method: 'POST',
        headers:appHeaders,
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
            let msg ="Invalid login Credencials";
            toast.error(msg,{
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar:true
              })
            toggleLoader('loader-div');
            }

     })

}

export default loginUser;
