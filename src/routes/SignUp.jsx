import '../styles/signUp.css';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserName('');
        setEmail('');
        setPassword('');
        navigate('/login');
      })
      .catch((err) => {
        console.log('Err', err.message);
      });
  };
  return (
    <div className='contact' id='contact'>
      <div className='title-container'>
        <h2 className='title-name'>Sign in</h2>
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
            SignUp
            <span className='connect-icon'>
              <AiOutlineSend />
            </span>
          </button>
        </div>

        <div className='already-acc'>
          Already have an account ?{'   '}
          <span className='already-acc-log'>
            <NavLink to='/login'>Sign in</NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;