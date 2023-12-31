import '../styles/navbar.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { LuUser } from 'react-icons/lu';
import { FiChevronDown } from 'react-icons/fi';
import { pagesDropdown } from '../constants';
import logo from '../../public/assets/shop.jpg';
import { CartConsumer } from '../context/cartContext';
import { useState } from 'react';
import { UserConsumer } from '../context/userContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { accessToken } = UserConsumer();
  const { totalQuantity } = CartConsumer();
  const [isMenu, setIsMenu] = useState(false);
  const [isMenuList, setIsMenuList] = useState(false);

  const showMenu = () => {
    setIsMenu(!isMenu);
    setIsMenuList(!isMenuList);
  };
  const hideMenu = () => {
    setIsMenu(!isMenu);
    setIsMenuList(!isMenuList);
  };

  const showMsg = () => {
    toast.warning('Please LogIn !');
  };
  return (
    <nav>
      <div className='nav-left'>
        <div className='nav-logo'>
          <h1 className='nav-logo-img'>
            <Link>
              <img src={logo} alt='logo' />
            </Link>
          </h1>
          <div className='nav-menu-icon'>
            {isMenu ? (
              <ImCancelCircle onClick={() => showMenu()} />
            ) : (
              <GiHamburgerMenu onClick={() => hideMenu()} />
            )}
          </div>
        </div>
        {isMenuList && (
          <ul className='nav-left-links'>
            <li className='nav-shop-link'>
              <div onClick={() => hideMenu()}>
                <Link to='/shop'>Shop</Link>
              </div>
            </li>
            <li className='nav-pages-link'>
              <div>Pages</div>
              <span className='link-down-icon'>
                <FiChevronDown />
              </span>
              <div className='nav-dropdown'>
                <div className='nav-dropdown-content'>
                  {pagesDropdown.map((item, index) => (
                    <Link to={item.to} key={index} onClick={() => hideMenu()}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link to='/contact' onClick={() => hideMenu()}>
                Contact
              </Link>
            </li>
          </ul>
        )}
        <ul className='nav-left-links-desktop'>
          <li className='nav-shop-link'>
            <div>
              <Link to='/shop'>Shop</Link>
            </div>
          </li>
          <li className='nav-pages-link'>
            <div>Pages</div>
            <span className='link-down-icon'>
              <FiChevronDown />
            </span>
            <div className='nav-dropdown'>
              <div className='nav-dropdown-content'>
                {pagesDropdown.map((item, index) => (
                  <Link to={item.to} key={index}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className='nav-contact'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <ul className='nav-right'>
        <li>
          <Link
            to={accessToken && '/cart'}
            onClick={!accessToken && showMsg}
            className='nav-cart-logo-container'
          >
            <span>
              <HiOutlineShoppingBag />
            </span>
            <span className='cart-item-count'>{totalQuantity}</span>
          </Link>
        </li>
        {!accessToken ? (
          <li>
            <Link to='/signUp'>
              <LuUser />
            </Link>
          </li>
        ) : (
          <Link to='profile'>
            <li className='login-info'>
              <h5>Profile</h5>
              <span>
                <CgProfile />
              </span>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
