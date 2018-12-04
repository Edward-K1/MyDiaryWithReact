import React from 'react';

const SingleEntry = (props)=> {
  return (
    <div id={`div-${props.id}`} className="m-2 p-2">
          <div className=" p-2 card">
            <h6 className="card-title">{props.title}</h6>
            <p className="card-text mr-4">
              {props.body}
            </p>
            <small className="text-muted">{props.createdAt}</small>
            <p>
                <button id={`edit-${props.id}`} className='btn btn-success m-1' onClick={ ()=> props.editEntry(props.id)}>Edit</button>
                <button id={`delete-${props.id}`}className='btn btn-danger m-1' onClick={ ()=> props.deleteEntry(props.id)}>Delete</button>
            </p>
          </div>
        </div>  
  )
}
export default SingleEntry;
