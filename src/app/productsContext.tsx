import axios from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

import {ProductInfo, ProductsContextTypes, ProductsPage} from "../shared/types/client.types";

export const ProductsContext = createContext<ProductsContextTypes>({
  products: []
});
export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({children}: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductInfo[]>([])
  useEffect(() => {
    axios
      .get<ProductsPage>('https://testguru.ru/frontend-test/api/v1/ads?page=1')
      .then((response) => setProducts(response.data.items))
  }, [])
  return (
    <>
      <ProductsContext.Provider value={{products}}>
        {children}
      </ProductsContext.Provider>
    </>
  );
}

export default ProductsProvider