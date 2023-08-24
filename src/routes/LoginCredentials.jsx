import '../styles/signUp.css';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import img from '../../public/assets/user.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserConsumer } from '../context/userContext';

const LoginCredentials = () => {
  const { accessToken, setAccessToken } = UserConsumer();

  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      uid: Date.now(),
      displayName: userName,
      email: email,
      photoURL: img,
      password,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    setAccessToken(JSON.parse(localStorage.getItem('user')));

    navigate('/');

    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='contact' id='contact'>
      <div className='title-container'>
        <h2 className='title-name'>Login Credentials</h2>
        <span className='title-subtitle'>Create a Shop Account !</span>
      </div>
      <form className='contact-form' onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Enter your Name'
          className='contact-form-name'
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <input
          type='email'
          name='email'
          placeholder='Enter a valid email address'
          className='contact-form-email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type='password'
          name='password'
          className='contact-form-message'
          placeholder='Enter New Password'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <div className='btn-container'>
          <button type='submit' className='btn connect'>
            Login
            <span className='connect-icon'>
              <AiOutlineSend />
            </span>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginCredentials;
