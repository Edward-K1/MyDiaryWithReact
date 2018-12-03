import React, { Component } from 'react';
import '../../styles/entries.css';
import SingleEntry from './singleEntry';
import { getEntries, deleteEntry } from '../../actions/entryActions';
import { removeEntryContainer } from '../../common/functions';
import { toast } from 'react-toastify';
import NavBar from '../navigation/NavBar';


class ViewEntries extends Component {

  state = {
      entries:[],
  }
  componentWillMount() {
    document.body.className = "entries-body bg-light";
    const entries = getEntries()
    entries.then(data => this.setState({entries: data['Diary Entries']}))

  }

  handleDelete =(entryId) =>{
      deleteEntry(entryId);
      toast.success('Entry Deleted',{
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar:true, autoClose:1500,
      })
      removeEntryContainer(entryId);
  }

  handleEdit = entryId =>{
      window.location = `/entry/${entryId}/edit`
  }


  render() {

    const entries = this.state.entries.map((entry) => {
        return(
        <SingleEntry
        title={entry.title}
        body={entry.content}
        createdAt={entry.created}
        deleteEntry={this.handleDelete}
        editEntry={this.handleEdit}
        id={entry.eid}
         />
        );

    });
    
    return (
        <React.Fragment>
        <NavBar />
      <div id="diary-entries-box" className="row m-2 p-2">

      {entries}
       
      </div>
      </React.Fragment>
    );
  }
}


export default ViewEntries;
