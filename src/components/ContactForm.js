import React, { useState } from 'react';
import axios from "axios";

import { useContactData } from '../queries/contactQuery';

export default function ContactForm() {
  const contactData = useContactData();

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  const [error, setError] = useState('');
  const [okMessage, setOkMessage] = useState('');

  const handleInputChange = (event) => {
      setFormData({
          ...formData,
          [event.target.name]: event.target.value
      })
  }

  const sendData = (event) => {
    event.preventDefault();

    if(formData.name === '' || formData.email === '' || formData.message === '') {
      setError('All fields are required');
    } else {
      axios.post('http://strapiexperimental.spotlio.com:13370/contact-forms', formData)
      .then(function (response) {
        setOkMessage('Message send');

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(function (error) {
        setError('Something went wrong. Please, try again.');
      });
    }
  }

  function RenderElement({element, index, changeFn, value }) {
    if(element.type === 'text') {
      return (
        <div key={index} className="col-12 col-12-xsmall">
          <input value={value} type="text" name={element.identifier} id={element.identifier} onChange={changeFn} placeholder={element.placeholder} />
        </div>
      );
    }

    if(element.type === 'email') {
      return (
        <div key={index} className="col-12 col-12-xsmall">
          <input value={value} type="email" name={element.identifier} id={element.identifier} onChange={changeFn} placeholder={element.placeholder} />
        </div>
      );
    }

    if(element.type === 'textarea') {
      return (
        <div key={index} className="col-12">
          <textarea value={value} name={element.identifier} id={element.identifier} onChange={changeFn} placeholder={element.placeholder} rows="6"></textarea>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="inner">
      <header>
        <h2>{contactData.title}</h2>
        <p>{contactData.description}</p>

        <form method="post" action="#" onSubmit={sendData}>
          <div className="row gtr-uniform">
            {
              contactData.formInput.map((element, index) => {
                return RenderElement({ value: formData[element.identifier], element, index, changeFn: handleInputChange })
              })
            }
            {
              error !== ''
              ?
              <p className="formErrorMessage">{error}</p>
              : 
              null
            }
            {
              okMessage !== ''
              ?
              <p className="formOkMessage">{okMessage}</p>
              : 
              null
            }
            <div className="col-12">
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="primary" /></li>
              </ul>
            </div>
          </div>
        </form>

      </header>
    </div>
  );
}
