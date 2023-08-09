import '../styles/navbar.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuSearch } from 'react-icons/lu';
import { AiOutlineHeart } from 'react-icons/ai';
import { LuUser } from 'react-icons/lu';
import { FiChevronDown } from 'react-icons/fi';
import { pagesDropdown } from '../constants';
import logo from '../../public/assets/shop.jpg';
import { CartConsumer } from '../context/cartContext';
import { useState } from 'react';

const Navbar = () => {
  const { totalQuantity } = CartConsumer();
  const [isLogIn, setIsLogIn] = useState(true);

  const changeLogInBtn = () => {
    setIsLogIn()
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
            <GiHamburgerMenu />
          </div>
        </div>
        <ul className='nav-left-links'>
          <li className='nav-shop-link'>
            <div>
              <Link to='shop'>Shop</Link>
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
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <ul className='nav-right'>
        <li className='nav-search-container'>
          <span className='nav-search-icon'>
            <LuSearch />
          </span>
          <input
            type='search'
            className='nav-search-input'
            placeholder='Type for search'
          />
        </li>
        <li>
          <Link to='/likedItem'>
            <AiOutlineHeart />
          </Link>
        </li>
        <li>
          <Link to='/cart' className='nav-cart-logo-container'>
            <span>
              <HiOutlineShoppingBag />
            </span>
            <span className='cart-item-count'>{totalQuantity}</span>
          </Link>
        </li>
        {isLogIn ? (
          <li>
            <Link to='/signUp'>
              <LuUser />
            </Link>
          </li>
        ) : (
          <li>
            <button>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
