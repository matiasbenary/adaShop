import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Product from "./Product";

const calculateTotal = (cart) => {
  let aux = 0;
  for (const product of cart) {
    aux += product.price * product.cant;
  }
  return aux;
};

const calculateTotalReduce = (cart) =>
  cart.reduce((total, product) => total + product.price * product.cant, 0);

const Cart = ({ cart, deleteProduct, deleteAllProducts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const total = calculateTotalReduce(cart);

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
