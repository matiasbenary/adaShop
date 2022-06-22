import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Product from "./Product";

const cart = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
    cant: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
    cant: 13,
  },
];

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const total = 2; // calcular total
  const deleteProduct = () => {
    console.log("hacer funcion");
  };

  const deleteAllProducts = () => {
    console.log("hacer funcion");
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Carrito ({cart.length})
      </Button>{" "}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>
          {!!cart.length || (
            <DrawerBody>
              <Text> No hay productos en el carrito ☹️</Text>
            </DrawerBody>
          )}

          {!!cart.length && (
            <>
              <DrawerBody>
                {cart.map((product) => (
                  <Product
                    product={product}
                    key={`cartProduct${product.id}`}
                    deleteProduct={deleteProduct}
                  />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Button
                  variant="outline"
                  mb={3}
                  w="full"
                  onClick={deleteAllProducts}
                >
                  Vaciar Carrito
                </Button>
                <Text>Total: {total}</Text>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
