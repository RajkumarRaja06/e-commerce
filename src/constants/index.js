import proHeader1 from '../../public/assets/product1.webp';
import proHeader2 from '../../public/assets/product2.webp';
import proHeader3 from '../../public/assets/product3.webp';

const shopDropdown = [
  {
    name: "Men's Collection",
    link: [
      { name: 'T-Shirts', to: '/product' },
      { name: 'Polo', to: '/product' },
      { name: 'Shirts', to: '/product' },
      { name: 'Jackets', to: '/product' },
    ],
  },
  {
    name: "Kid's Collection",
    link: [
      { name: 'Dresses', to: '/product' },
      { name: 'Shirts', to: '/product' },
      { name: 'T-Shirts', to: '/product' },
      { name: 'Lowers', to: '/product' },
    ],
  },
  {
    name: "Women's Collection",
    link: [
      { name: 'Dresses', to: '/product' },
      { name: 'Blouses & Shirts', to: '/product' },
      { name: 'T-Shirts', to: '/product' },
      { name: 'Rompers', to: '/product' },
    ],
  },
];

const pagesDropdown = [
  { name: 'Home', to: '/home' },
  { name: 'Shop', to: '/shop' },
  { name: 'Product Details', to: '/product' },
  { name: 'Checkout', to: '/cart' },
  { name: 'Regular Pages', to: '/pages' },
  { name: 'Contact', to: '/contact' },
];

const productHeader = [
  { name: "Men's", img: proHeader1 },
  { name: 'Accessories', img: proHeader2 },
  { name: "Women's", img: proHeader3 },
];

const buttonCategories = ['all', "men's", 'accessories', "women's"];

export { shopDropdown, pagesDropdown, productHeader, buttonCategories };
