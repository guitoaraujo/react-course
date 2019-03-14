import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { UserForm } from './user_form';
import { Preview } from './preview';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:       '',
      phone:      '',
      email:      '',
      image_url:  'https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif'
    };
  }

  handleInput(attribute, value){
    this.setState({ [attribute]: value })
  }

  render() {
    return (
      <div className="container">
        <div style={{ float: 'left' }}>
          <UserForm handleInput={ this.handleInput.bind(this) } { ...this.state } />
        </div>
        <div style={{ float: 'right' }}>
          <Preview { ...this.state } />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
