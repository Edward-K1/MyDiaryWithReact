import { API_URL } from '../common';
import { toast } from 'react-toastify';
import { toggleLoader } from '../common/functions';


const registerUser =(user)=> {
    

    let appHeaders = new Headers({
        'Accept':'application/json',
        'Content-Type':'application/json; charset=UTF-8'
    })


    fetch(API_URL + '/auth/signup', {
        method: 'POST',
        headers:appHeaders,
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
               toggleLoader('loader-div');
               setTimeout(function () {
                            window.location.replace('/login');
                            },1000);

           }else if(results.status === 400){
                let msg = JSON.stringify(results.data['message']['error'])
                toast.error(msg,{
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar:true
                  })
                toggleLoader('loader-div');

           }else if(results.status === 409){
                let msg = JSON.stringify(results.data['message'])
                toast.error(msg,{
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar:true
                  })
                toggleLoader('loader-div');
           }
        }).catch(error => console.log(error));

}

export default registerUser;
