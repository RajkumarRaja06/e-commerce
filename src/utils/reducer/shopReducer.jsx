import { productData } from '../../constants';

const shopReducer = (state, action) => {
  switch (action.type) {
    case 'lowest price':
      const lowestPrice = productData.toSorted((a, b) => a.price - b.price);
      return { state, products: lowestPrice };

    case 'highest price':
      const highestPrice = productData.toSorted((a, b) => b.price - a.price);
      return { state, products: highestPrice };

    case 'product name':
      const productName = productData.toSorted((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return { state, products: productName };

    case 'collection':
      return { state, products: productData };

    case 'default shorting':
      return { state, products: productData };

    case "women's":
      const womenArray = productData.filter((item) => {
        return item.categories === action.type;
      });
      return { state, products: womenArray };

    case "men's":
      const menArray = productData.filter((item) => {
        return item.categories === action.type;
      });
      return { state, products: menArray };

    case 'accessories':
      const accessoriesArray = productData.filter((item) => {
        return item.categories === action.type;
      });
      return { state, products: accessoriesArray };

    case 'woods':
      const woodsArray = productData.filter((item) => {
        return item.categories === action.type;
      });
      return { state, products: woodsArray };

    case 'refrigerators':
      const refrigeratorsArray = productData.filter((item) => {
        return item.categories === action.type;
      });
      return { state, products: refrigeratorsArray };

    case 'filter':
      const keyword = action.payload.e.target.value;

      if (keyword !== '') {
        const results = productData.filter((user) => {
          return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
        return { state, products: results };
      } else {
        return { state, products: productData };
      }

    default:
      return { state };
  }
};

export default shopReducer;
