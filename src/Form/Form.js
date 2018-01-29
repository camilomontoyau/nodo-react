import React, { Component } from 'react';
import InputText from './InputText/InputText';
import Title from '../Title/Title';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: ''
    };
  };

  handleState = (event) => {
    let input = event.target.name;
    console.log('input',input);
    let newState = Object.assign({}, this.state);
    console.log('como esta', newState);
    newState[input] = event.target.value;
    console.log('newState', newState);
    this.setState(newState);
  }

  render() {
    return (
      <form>
        <Title name={this.state.name}/>
        <InputText name="name" textValue={this.state.name} handleChange={this.handleState} />
        <InputText name="lastName" textValue={this.state.lastName} handleChange={this.handleState} />
      </form>
    );
  }
}

export default Form;
