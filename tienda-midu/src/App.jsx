import { products as initialProducts} from "./mocks/products.json";
import { Products } from "./components/Products"
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from "./config";
import { Filters } from "./components/Filters.jsx";
import { useFilters } from "./hooks/useFilters";



function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)
  
  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
