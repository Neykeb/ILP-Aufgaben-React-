import "./App.css";
import { ProductCard } from "./components/productCard.default";

function App() {
  const product = {
    name: "Tisch",
    price: "200",
    category: "Büro",
    description: "schwarzer Tisch aus Massivholz ",
    initialStock: true,
  };

  return (
    <>
      <ProductCard product={product} />
      
    </>
  );
}

export default App;
