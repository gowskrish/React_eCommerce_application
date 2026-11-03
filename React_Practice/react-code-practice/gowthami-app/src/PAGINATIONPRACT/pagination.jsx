import React, { useState, useEffect } from 'react';
import ProductListPage from './PLP/productListPage';
import './pagination.scss';

function Pagination() {
        const [product, setProduct] = useState([])
        const [search, setSearch] = useState("");
        // console.log("Fetch Products:", product);
        const [error, setError] = useState(" ");
        // const [mensDatas, setMensData] = useState[];
        // const filterMensData = product.filter((item) => item.collection === "Men");
        const [displayData, setdisplayData] = useState(product);
        const [serachByCategory, setSerachByCategory] = useState("");

        function filterDatas(a){
            setSerachByCategory(a);
        };

    useEffect(() => {
            const fetchProductDatas = async () => {
                try {
                    const productDatas = await fetch(("http://localhost:3001/products"))                

                if(!productDatas.ok){
                    throw new Error ("Failed to fetch Datas")
                }
                const responseData = await productDatas.json();
                // console.log("forReference:", responseData);

                setProduct(responseData);
            } catch (error){
                setError(error.message)
            }
        }
            fetchProductDatas();
    }, []) 
    
   
    // api data --> 
    // api data --> processed data send
    
    return (
        <div>
            <div className="pagination_main">
                {/* <h1>Welcome to Pagination</h1>                 */}
                <input type= "text"
                 placeholder="Search here..."
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 />
                <div className="pagination_list">                    
                    <ul>
                        <li onClick={() => filterDatas("Men")}>MEN</li>
                        <li onClick={() => filterDatas("Women")}>WOMEN</li>
                        <li onClick={() => filterDatas("Kids")}>KIDS</li>
                        <li onClick={() => filterDatas("Reset")}>Reset</li>
                    </ul>               
                                       
                </div>
            </div>

                

            <ProductListPage categoryKeyword={serachByCategory} search={search}/>
            {/* <div className="serach-products"></div>
            <div data-component="plp-component"></div> // inject component here <Plp data={product}/>
            <div data-component="pdp-component"></div> // inject component here <Pdp />
            <div className="pagination"></div> */}
        </div>
    )
}
export default Pagination;