export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Casio Watch", price: 100 },
        { id: 2, name: "Adidas Shoes", price: 120 },
        { id: 3, name: "Nike T-Shirt", price: 50 },
        { id: 4, name: "Apple iPhone", price: 800 },
        { id: 5, name: "Samsung TV", price: 400 },
      ]);
    }, 2000);
  });
};

export const getProductDetail = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id,
        name: `${id} - Casio Watch`,
        price: Math.floor(Math.random() * 1000 * id),
      });
    }, 2000);
  });
};
