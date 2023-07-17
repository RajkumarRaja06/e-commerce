import { Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Pages,
  Contact,
  Cart,
  Authentication,
  LikedItem,
} from './components';
import Home from './routes/home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index={true} element={<Home />} />
        <Route path='pages' element={<Pages />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='likedItem' element={<LikedItem />} />
      </Route>
    </Routes>
  );
};

export default App;
