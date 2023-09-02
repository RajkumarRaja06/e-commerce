import { Navbar, Footer } from '../components';
import { Outlet } from 'react-router-dom';
import '../styles/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </main>
  );
};

export default Root;
