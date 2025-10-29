import { useState, useEffect, createContext } from "react";

export const ProductsContext =  createContext();

export function ProductsProvider({children}){

    const [products, setProducts] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${API_URL}`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);
  return(
    <ProductsContext.Provider value={{products}}>
        {children}

    </ProductsContext.Provider>
  )

    

}


