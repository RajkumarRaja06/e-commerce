import '../styles/signUp.css';
import { AiOutlineSend, AiFillDownCircle } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isTestBtn, setIsTestBtn] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { providerData } = user;
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

          <div>
            <button
              type='submit'
              className='btn connect'
              onClick={() => setIsTestBtn(!isTestBtn)}
            >
              View Test Credentials
              <span className='connect-icon'>
                <AiFillDownCircle />
              </span>
            </button>
            {isTestBtn && (
              <div className='testCredentials'>
                <div>
                  <h5>Email :</h5>
                  <p>shop@gmail.com</p>
                </div>
                <div>
                  <h5>Password :</h5>
                  <p>Rajshop123#</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='already-acc'>
          Not account yet ?{'   '}
          <span className='already-acc-log'>
            <NavLink to='/signUp'>Click here to Register</NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
