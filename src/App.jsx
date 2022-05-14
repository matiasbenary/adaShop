import { useState } from "react";
import ListOfProducts from "./Components/ListOfProducts";
import Navbar from "./Components/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const hasProduct = cart.some((pr) => pr.id === product.id);
    if (hasProduct) {
      setCart(
        // si exite lo edito
        cart.map((pr) => {
          if (pr.id === product.id) {
            return { ...pr, cant: pr.cant + 1 };
          }
          return pr;
        })
      );
    } else {
      setCart([...cart, { ...product, cant: 1 }]);
    }
  };

  const deleteProduct = (product) => {
    setCart(cart.filter((pr) => pr.id !== product.id));
  };

  const deleteAllProducts = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar
        cart={cart}
        deleteProduct={deleteProduct}
        deleteAllProducts={deleteAllProducts}
      />
      <ListOfProducts addProduct={addProduct} />
    </>
  );
};

export default App;
