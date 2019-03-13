import React, { component } from 'react';
import ReactDOM from 'react-dom';
import { InputField } from './input_field';
import { Preview } from './preview';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:   '',
      phone:  '',
      email:  ''
    };
  }

  handleInput(attribute, value){
    this.setState({ [attribute]: value })
  }

  render() {
    return (
      <div className="container">
        <form>
          <InputField placeholder="Name"  onChange={ value => { this.handleInput('name', value)} }/><br/>
          <InputField placeholder="Phone" onChange={ value => { this.handleInput('phone', value)} }/><br/>
          <InputField placeholder="Email" onChange={ value => { this.handleInput('email', value)} }/><br/>

          <button type="submit">Send</button>
        </form>
        <div>
          <Preview placeholder="Name"   text={ this.state.name }/>
          <Preview placeholder="Phone"  text={ this.state.phone }/>
          <Preview placeholder="Email"  text={ this.state.email }/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
