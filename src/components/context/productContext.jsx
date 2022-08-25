import { createContext, useState, useContext} from "react";
import useAxios from "../hooks/useAxios";

export const ProductContext = createContext({
    Product: [],
    setProducts: (Products) => {},
});
export const ProductContextProvider = ({children}) => {
    const [products, setValue] =useState([]);
    const setProducts = (products) => setValue(products);
    return(
        <ProductContext.Provider value = {{ products, setProducts}}>
            {children}
        </ProductContext.Provider>
    );

};
export const useProductContext = () => useContext(ProductContext);