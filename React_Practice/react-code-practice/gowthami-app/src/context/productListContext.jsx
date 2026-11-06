import { createContext, useState, useEffect } from 'react';

export const ProductListPageContext = createContext();

const ProductListProvider = ({children}) => {

    const [productList, setProductList] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     async function fetchProductList(){
    //         try{
    //             const fetchProductdata = await fetch("http://localhost:3001/productDetails")

    //             if(!fetchProductdata.ok){
    //                 throw new Error("ProductList not Fetching")
    //             }
    //             const responseProductListData = await fetchProductdata.json()
    //             setProductList(responseProductListData);

    //         }catch(error){
    //             setError(error.message)
    //         }finally{
    //             setLoading(false)
    //         }
    //     }
    //     fetchProductList()
    // }, [])

    return (
        <ProductListPageContext.Provider value={{productList, setProductList}}>
            {children}
        </ProductListPageContext.Provider>
    )
}

export default ProductListProvider;