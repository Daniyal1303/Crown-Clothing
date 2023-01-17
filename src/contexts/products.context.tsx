import { createContext,useState } from 'react';

import PRODUCTS from '../shop-data.json';


interface contextState 
{ products: any, setProducts?: React.Dispatch<React.SetStateAction<any>> }

export const ProductsContext = createContext<contextState>({
  products: [],
})

export const ProductsProvider = ({children}:any) => {
    const[products,setProducts] = useState(PRODUCTS);
    const value = {products}
   

   
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
