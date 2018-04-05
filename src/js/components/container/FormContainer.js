import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seoTitle: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seoTitle } = this.state;
    return (
      <form id="article-form">
        <Input
          defaultValue="Hello!"
          text="SEO title"
          label="seoTitle"
          type="text"
          id="seoTitle"
          value={seoTitle}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
