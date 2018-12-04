import { toast } from 'react-toastify';

export function toggleLoader(elementId, value = 'none') {
    const loader = document.getElementById(elementId);
    if(loader)
      loader.style.display = value;
  }

export function removeEntryContainer(entryId){
    let parent = document.getElementById('diary-entries-box');
    var deletedEntry = document.getElementById("div-" + entryId);
    parent.removeChild(deletedEntry);
}

export function showErrorMsg(msg, duration=5000){
    toast.error(msg,{
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar:true,
        autoClose: duration
      })

}

export function logOut() {
    localStorage.removeItem('token');
    window.location.replace('/');
  }