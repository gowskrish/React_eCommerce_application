import {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children})=> {

    const [selectProductId, setSelectProductId] = useState(null)

    useEffect(() => {
        console.log("selectProducts", selectProductId)
    }, [selectProductId])

    return (
        <ProductContext.Provider value={{selectProductId, setSelectProductId}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
