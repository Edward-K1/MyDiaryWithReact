import React, { Component } from "react";
import { createEntry, updateEntry, getEntry } from "../../actions/entryActions";

class CreateEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
          entry:{},
          title:'',
          content:''

        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      onChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }
  
      onSubmit(evt) {
        evt.preventDefault();

        const entry = {
          title: this.state.title ? this.state.title : this.state.entry.title,
          content: this.state.content ? this.state.content : this.state.entry.content,
        }

        if (this.getURLPath() === '/entry/create'){
            createEntry(entry)
            window.location = '/home';
        } else {
            updateEntry (entry, this.state.entry.eid);
            window.location = '/home';
        }
      }

    getURLPath = () => window.location.pathname;

    cancelEntry=()=>{
        window.location.replace('/home')
    }

    componentWillMount(){
        document.body.className = 'bg-primary';

        if (this.getURLPath() !== '/entry/create'){
            let entryId = this.getURLPath().split('/')[2]
            let entry = getEntry(entryId);
            entry.then(data => this.setState({entry:data['Diary Entry']}))
        }

    }
  render() {
    return (
      <div className="container">
        <form id="edit-content-form" onSubmit={this.onSubmit} className="center-content">
          <div id="content-title" className="form-group">
            <input
              type="text"
              id="content-title-text"
              className="form-control m-1"
              name="title"
              placeholder="Title of your entry"
              onChange={this.onChange}
              defaultValue={this.state.entry.title}
            />
          </div>

          <div id="content-body" className="form-group">
            <textarea
              id="content-body-text"
              name="content"
              className="form-control"
              placeholder="Write your thoughts and feelings..."
              value={this.state.content ? this.state.content : this.state.entry.content}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-success m-1"
              id="entry-text-submit"
              name="send-entry"
              value= {this.getURLPath() ==='/entry/create' ? "Save" : "Update" }
            />

            <input
              type="reset"
              className="btn btn-warning m-1"
              id="cancel-text-entry"
              value="Cancel"
              onClick={this.cancelEntry}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateEntry;
