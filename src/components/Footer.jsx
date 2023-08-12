import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_menu_link'>
        <Link to='shop'>Shop</Link>
        <Link to='contact'>Contacts us</Link>
      </div>
      <p className='footer_para'>
        ©2023 All Rights Reserverd. This template is made with by{' '}
        <span>
          <Link
            to='https://rajkumarraja-portfolio.netlify.app/'
            target='_blank'
          >
            ❤️ RajKumarRaja
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
