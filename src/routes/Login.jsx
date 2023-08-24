import '../styles/signUp.css';
import { AiOutlineSend } from 'react-icons/ai';

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { UserConsumer } from '../context/userContext';

import img from '../../public/assets/user.png';

const Login = () => {
  const { setAccessToken } = UserConsumer();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getUserName = (emailName) => {
    const username = emailName.substring(0, emailName.indexOf('@'));
    return username;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const { providerData } = user;

        const userData = {
          uid: Date.now(),
          displayName: getUserName(providerData[0].email),
          email: providerData[0].email,
          photoURL: img,
        };

        localStorage.setItem('user', JSON.stringify(userData));
        setAccessToken(JSON.parse(localStorage.getItem('user')));

        setEmail('');
        setPassword('');
        navigate('/');
      })
      .catch((err) => {
        console.log('Err', err.message);
      });
  };

  return (
    <div className='contact' id='contact'>
      <div className='title-container'>
        <h2 className='title-name'>Log In</h2>
        <span className='title-subtitle'>Use Your Shop Account !</span>
      </div>
      <form className='contact-form' onSubmit={onSubmit}>
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
            LogIn
            <span className='connect-icon'>
              <AiOutlineSend />
            </span>
          </button>
        </div>
        <div className='already-acc'>
          Not account yet ?{'   '}
          <span className='already-acc-log'>
            <NavLink to='/signUp'>Sign up</NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
