import { Navbar, Footer } from '../components';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
