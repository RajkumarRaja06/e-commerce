import { v4 as uuidv4 } from 'uuid';

import proHeader1 from '../../public/assets/product1.webp';
import proHeader2 from '../../public/assets/product2.webp';
import proHeader3 from '../../public/assets/product3.webp';

// women's
import w1 from '../../public/assets/women/w1.webp';
import w2 from '../../public/assets/women/w2.webp';
import w3 from '../../public/assets/women/w3.webp';
import w4 from '../../public/assets/women/w4.webp';
import w5 from '../../public/assets/women/w5.webp';
import w6 from '../../public/assets/women/w6.webp';
import w7 from '../../public/assets/women/w7.webp';
import w8 from '../../public/assets/women/w8.webp';
import w9 from '../../public/assets/women/w9.webp';
import w10 from '../../public/assets/women/w10.webp';
import w11 from '../../public/assets/women/w11.webp';
import w12 from '../../public/assets/women/w12.webp';
import w13 from '../../public/assets/women/w13.webp';
import w14 from '../../public/assets/women/w14.webp';
import w15 from '../../public/assets/women/w15.webp';

// men's
import m1 from '../../public/assets/men/m1.webp';
import m2 from '../../public/assets/men/m2.webp';
import m3 from '../../public/assets/men/m3.webp';
import m4 from '../../public/assets/men/m4.webp';
import m5 from '../../public/assets/men/m5.webp';
import m6 from '../../public/assets/men/m6.webp';
import m7 from '../../public/assets/men/m7.webp';
import m8 from '../../public/assets/men/m8.webp';
import m9 from '../../public/assets/men/m9.webp';
import m10 from '../../public/assets/men/m10.webp';
import m11 from '../../public/assets/men/m11.webp';
import m12 from '../../public/assets/men/m12.webp';
import m13 from '../../public/assets/men/m13.webp';
import m14 from '../../public/assets/men/m14.webp';
import m15 from '../../public/assets/men/m15.webp';

// accessories
import a1 from '../../public/assets/accessories/a1.webp';
import a2 from '../../public/assets/accessories/a2.webp';
import a3 from '../../public/assets/accessories/a3.webp';
import a4 from '../../public/assets/accessories/a4.webp';
import a5 from '../../public/assets/accessories/a5.webp';
import a6 from '../../public/assets/accessories/a6.webp';
import a7 from '../../public/assets/accessories/a7.webp';
import a8 from '../../public/assets/accessories/a8.webp';
import a9 from '../../public/assets/accessories/a9.webp';
import a10 from '../../public/assets/accessories/a10.webp';
import a11 from '../../public/assets/accessories/a11.webp';
import a12 from '../../public/assets/accessories/a12.webp';
import a13 from '../../public/assets/accessories/a13.webp';
import a14 from '../../public/assets/accessories/a14.webp';
import a15 from '../../public/assets/accessories/a15.webp';

// Woods
import c1 from '../../public/assets/woods/c1.webp';
import c2 from '../../public/assets/woods/c2.webp';
import c3 from '../../public/assets/woods/c3.webp';
import c4 from '../../public/assets/woods/c4.webp';
import c5 from '../../public/assets/woods/c5.webp';
import c6 from '../../public/assets/woods/c6.webp';
import c7 from '../../public/assets/woods/c7.webp';
import c8 from '../../public/assets/woods/c8.webp';
import c9 from '../../public/assets/woods/c9.webp';
import c10 from '../../public/assets/woods/c10.webp';

// Refrigerators
import r1 from '../../public/assets/refrigerators/r1.webp';
import r2 from '../../public/assets/refrigerators/r2.webp';
import r3 from '../../public/assets/refrigerators/r3.webp';
import r4 from '../../public/assets/refrigerators/r4.webp';
import r5 from '../../public/assets/refrigerators/r5.webp';
import r6 from '../../public/assets/refrigerators/r6.webp';
import r7 from '../../public/assets/refrigerators/r7.webp';
import r8 from '../../public/assets/refrigerators/r8.webp';
import r9 from '../../public/assets/refrigerators/r9.webp';
import r10 from '../../public/assets/refrigerators/r10.webp';

const pagesDropdown = [
  { name: 'Product Details', to: 'product' },
  { name: 'Checkout', to: 'cart' },
];

const productHeader = [
  { name: "Men's", img: proHeader1, to: 'shop', category: "men's" },
  { name: 'Accessories', img: proHeader2, to: 'shop', category: 'accessories' },
  { name: "Women's", img: proHeader3, to: 'shop', category: "women's" },
];

const buttonCategories = ['all', "men's", 'accessories', "women's"];

const shortDropdown = [
  'default shorting',
  'lowest price',
  'highest price',
  'product name',
];

const productData = [
  {
    id: 1,
    categories: "women's",
    name: 'Pieces Metallic Printed',
    img: w1,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Herschel supply',
    img: w2,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'PETITE Belted Jumper Dress',
    img: w3,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Pieces Metallic Printed',
    img: w4,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Herschel supply',
    img: w5,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'PETITE Belted Jumper Dress',
    img: w6,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Pieces Metallic Printed',
    img: w7,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Herschel supply',
    img: w8,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'PETITE Belted Jumper Dress',
    img: w9,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Pieces Metallic Printed',
    img: w10,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Herschel supply',
    img: w11,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'PETITE Belted Jumper Dress',
    img: w12,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Pieces Metallic Printed',
    img: w13,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'Herschel supply',
    img: w14,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "women's",
    name: 'PETITE Belted Jumper Dress',
    img: w15,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },

  {
    id: 2,
    categories: "men's",
    name: 'Herschel supply',
    img: m1,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m2,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Herschel supply',
    img: m3,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m4,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Herschel supply',
    img: m5,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m6,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Herschel supply',
    img: m7,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m8,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Herschel supply',
    img: m9,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m10,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m11,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Herschel supply',
    img: m12,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m13,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Herschel supply',
    img: m14,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: "men's",
    name: 'Only Check Trouser',
    img: m15,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },

  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Green Dress with details',
    img: a1,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Converse All Star Hi Plimsolls',
    img: a2,
    price: 210,
    images: [w4, w10, w1],
    quantity: 1,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Mini Silver Mesh Watch',
    img: a3,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Green Dress with details',
    img: a4,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Converse All Star Hi Plimsolls',
    img: a5,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Mini Silver Mesh Watch',
    img: a6,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Green Dress with details',
    img: a7,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Converse All Star Hi Plimsolls',
    img: a8,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Mini Silver Mesh Watch',
    img: a9,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Green Dress with details',
    img: a10,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Converse All Star Hi Plimsolls',
    img: a11,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Mini Silver Mesh Watch',
    img: a12,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Green Dress with details',
    img: a13,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Converse All Star Hi Plimsolls',
    img: a14,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'accessories',
    name: 'Mini Silver Mesh Watch',
    img: a15,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },

  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Green Dress with details',
    img: c1,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Converse All Star Hi Plimsolls',
    img: c2,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Mini Silver Mesh Watch',
    img: c3,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Green Dress with details',
    img: c4,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: 4,
    categories: 'woods',
    name: 'Converse All Star Hi Plimsolls',
    img: c5,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Mini Silver Mesh Watch',
    img: c6,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Green Dress with details',
    img: c7,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Converse All Star Hi Plimsolls',
    img: c8,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Mini Silver Mesh Watch',
    img: c9,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'woods',
    name: 'Green Dress with details',
    img: c10,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },

  {
    id: 3,
    categories: 'refrigerators',
    name: 'Green Dress with details',
    img: r1,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Converse All Star Hi Plimsolls',
    img: r2,
    price: 210,
    images: [w4, w10, w1],
    quantity: 1,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Mini Silver Mesh Watch',
    img: r3,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Green Dress with details',
    img: r4,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Converse All Star Hi Plimsolls',
    img: r5,
    price: 210,
    images: [w4, w10, w1],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Mini Silver Mesh Watch',
    img: r6,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Green Dress with details',
    img: r7,
    price: 350,
    images: [w2, w7, w15],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Converse All Star Hi Plimsolls',
    img: r8,
    price: 210,
    images: [w4, w10, w1],
    quantity: 1,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Mini Silver Mesh Watch',
    img: r9,
    price: 150,
    images: [w6, w8, w14],
    quantity: 0,
  },
  {
    id: uuidv4(),
    categories: 'refrigerators',
    name: 'Green Dress with details',
    img: r10,
    price: 350,
    images: [w2, w7, w15],
    quantity: 1,
  },
];

const data = [
  {
    id: 1,
    categories: "women's",
    name: 'Pieces Metallic Printed',
    img: w1,
    price: 210,
    images: [w4, w10, w1],
    quantity: 4,
  },
  {
    id: 2,
    categories: "men's",
    name: 'Herschel supply',
    img: m1,
    price: 210,
    images: [w4, w10, w1],
    quantity: 1,
  },
  {
    id: 3,
    categories: 'refrigerators',
    name: 'Converse All Star Hi Plimsolls',
    img: r8,
    price: 210,
    images: [w4, w10, w1],
    quantity: 2,
  },
  {
    id: 4,
    categories: 'woods',
    name: 'Converse All Star Hi Plimsolls',
    img: c5,
    price: 210,
    images: [w4, w10, w1],
    quantity: 2,
  },
];

export default data;

export {
  pagesDropdown,
  productHeader,
  buttonCategories,
  productData,
  shortDropdown,
};
