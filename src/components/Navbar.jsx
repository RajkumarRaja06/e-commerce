import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/pages'>Pages</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/authentication'>Auth</Link>
      <Link to='/likedItem'>Liked Button</Link>
      <Link to='/cart'>Cart</Link>
    </nav>
  );
};

export default Navbar;
