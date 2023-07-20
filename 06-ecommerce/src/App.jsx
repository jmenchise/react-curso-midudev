import { products } from './mocks/products.json';
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { IS_DEVELOPMENT } from "./config";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";
import useFilters from "./hooks/useFilters";

function App() {
  const { filterProducts } = useFilters();

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
};

export default App
