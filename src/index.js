import React, { component } from 'react';
import ReactDOM from 'react-dom';
import InputField from './input_field';
import Preview from './preview';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:   'igor',
      phone:  '999 999 9999',
      email:  'igor@igor.com'
    };
  }

  getValue(event){
    console.log(event);
    let val = event.target.value
    this.setState({ name: val })
  }

  render() {
    return (
      <div className="container">
        <form>
          <InputField placeholder="Name" onChange={ event => { this.getValue(event)} }/><br/>
          <InputField placeholder="Phone"/><br/>
          <InputField placeholder="Email"/><br/>

          <button type="submit">Send</button>
        </form>
        <div>
          <Preview placeholder="Name" text={ this.state.name }/>
          <Preview placeholder="Phone" />
          <Preview placeholder="Email" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
