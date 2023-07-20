import { Navbar, Footer } from '../components';
import { Outlet } from 'react-router-dom';
import '../styles/index.css';

const Root = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;
