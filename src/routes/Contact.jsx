import '../styles/contact.css';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';

const Contact = () => {
  const [users, setUsers] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = users;

  function handleOnchange(event) {
    const value = event.target.value;
    const key = event.target.name;
    setUsers({
      ...users,
      [key]: value,
    });
  }

  function submitHandler() {
    setUsers({ name: '', email: '', message: '' });
  }

  return (
    <div className='contact' id='contact'>
      <div className='title-container'>
        <h2 className='title-name'>Contact Us</h2>
        <span className='title-subtitle'>Get In Touch With Us!</span>
      </div>
      <form
        className='contact-form'
        action='https://formsubmit.co/rkrajkumarco@gmail.com'
        method='POST'
        onSubmit={submitHandler}
      >
        <input
          type='text'
          name='name'
          placeholder='Enter your Name'
          className='contact-form-name'
          required
          value={name}
          onChange={(event) => handleOnchange(event)}
        />

        <input
          type='email'
          name='email'
          placeholder='Enter a valid email address'
          className='contact-form-email'
          required
          value={email}
          onChange={(event) => handleOnchange(event)}
        />

        <textarea
          name='message'
          cols='30'
          rows='10'
          className='contact-form-message'
          placeholder='Message'
          required
          value={message}
          onChange={(event) => handleOnchange(event)}
        ></textarea>

        <div className='btn-container'>
          <button type='submit' className='btn connect'>
            Send Message
            <span className='connect-icon'>
              <AiOutlineSend />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
