import { UserConsumer } from '../context/userContext';
import '../styles/profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { accessToken, setAccessToken } = UserConsumer();
  const { displayName, email, photoURL, uid } = accessToken;
  const navigate = useNavigate();

  const logOut = () => {
    setAccessToken(null);
    localStorage.clear();
    navigate('/');
  };

  return (
    <section className='profile'>
      <div className='profile-img'>
        <img src={photoURL} alt={displayName} />
      </div>

      <div className='profile-data'>
        <h1>Your Profile</h1>
        <div className='profile-id'>
          <label>ID</label>
          <input type='number' value='123456' name='cmp_no' id='id_cmp_no' />
        </div>
        <div className='profile-name'>
          <label>User Name</label>
          <input
            type='text'
            value={displayName}
            name='cmp_name'
            id='id_cmp_name'
          />
        </div>
        <div className='profile-email'>
          <label>Email</label>
          <input
            type='email'
            value={email}
            name='cmp_email'
            id='id_cmp_email'
          />
        </div>
        <button onClick={logOut}>Logout</button>
      </div>
    </section>
  );
};

export default Profile;
