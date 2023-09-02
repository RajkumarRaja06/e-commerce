import '../styles/signUp.css';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setProfileData } from '../utils/firebaseFunction';

import { storage, auth } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { UserConsumer } from '../context/userContext';
const SignUp = () => {
  const { fetchProfileData } = UserConsumer();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [gender, setGender] = useState();
  const [imageURL, setImageURL] = useState();

  const onSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/login');
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          alert('Email already exist');
          navigate('/login');
          toast.warning('Email already exist');
        }
      });
  };

  const getImageUrl = (event) => {
    const imageFile = event.target.files[0];

    const storageRef = ref(
      storage,
      `usersImage/${Date.now()}/${imageFile.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case 'paused':
            toast.info('Upload is Paused!');
            break;
          case 'running':
            toast.warning('Waiting for Image Upload!!');
            break;
        }
      },
      (error) => {
        console.log('Error', error);
        toast.error('Error... Try Again!');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL);
          toast.success('Image Uploaded Successfully!');
        });
      }
    );
  };

  const formValidation = (e) => {
    e.preventDefault();
    if (userName && email && password && number && gender && imageURL) {
      if (number.length === 10) {
        const data = {
          id: Date.now(),
          userName,
          email,
          password,
          number,
          gender,
          image: imageURL,
        };
        setProfileData(data);
        fetchProfileData();
        onSubmit();
        clearFormInput();
      } else toast.warning('Enter valid phone number !');
    } else toast.warning('Input Field Is Mandatory !');
  };

  const clearFormInput = () => {
    setUserName('');
    setEmail('');
    setPassword('');
    setGender('');
    setNumber('');
    setImageURL('');
  };

  return (
    <div className='contact' id='contact'>
      <div className='title-container'>
        <h2 className='title-name'>Sign Up</h2>
        <span className='title-subtitle'>Create a Shop Account !</span>
      </div>
      <form className='contact-form' onSubmit={formValidation}>
        <input
          type='text'
          name='name'
          placeholder='User Name'
          className='contact-form-name'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <input
          type='email'
          name='email'
          placeholder='Email address'
          className='contact-form-email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type='password'
          name='password'
          className='contact-form-message'
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <input
          type='number'
          name='mobile number'
          className='contact-form-message'
          placeholder='Mobile Number'
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        ></input>

        <div className='signFrom-gender'>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id='gender'
            placeholder='gender'
          >
            <option defaultChecked>Gender</option>
            <option value='Male'>Male</option>
            <option value='Women'>Women</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div className='signFrom-profilePic'>
          <label htmlFor='image'>Profile Picture</label>
          <input
            type='file'
            name='image'
            accept='image/*'
            id='image'
            onChange={(event) => getImageUrl(event)}
          />
        </div>

        {imageURL && (
          <div className='image-url'>
            <img src={imageURL} alt='imgUrl' />
          </div>
        )}

        <div className='btn-container'>
          <button type='submit' className='btn connect'>
            Register
            <span className='connect-icon'>
              <AiOutlineSend />
            </span>
          </button>
        </div>

        <div className='already-acc'>
          Already have an account ?{'   '}
          <span className='already-acc-log'>
            <NavLink to='/login'>Click here to Login</NavLink>
            <br />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
