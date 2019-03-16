import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from  'axios';

import { UserForm } from './userForm';
import { Preview } from './preview';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:     '',
      phone:    '',
      email:    '',
      imageUrl: ''
    };
  }

  async componentDidMount() {
    const {data: {url: imageUrl}} = await axios.get('https://jsonplaceholder.typicode.com/photos/1')
    this.setState({imageUrl})
  }

  handleInput(attribute, value){
    this.setState({ [attribute]: value })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 foart-left">
            <UserForm handleInput={ this.handleInput.bind(this) } { ...this.state } />
          </div>
          <div className="col-6 float-right">
            <Preview { ...this.state } />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
