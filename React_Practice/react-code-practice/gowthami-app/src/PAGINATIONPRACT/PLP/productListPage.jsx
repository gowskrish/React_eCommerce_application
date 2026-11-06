
import { useContext, useState, useEffect } from 'react';
import './productListPage.scss';
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/productContext";

function Product_List_Page({ categoryKeyword, search }) {
    const [apiproducts, setApiproducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { setSelectProductId } = useContext(ProductContext)
    const navigate = useNavigate();




    // handleClickProductById
    const handleClickProductById = (id) => {
        setSelectProductId(id)
        navigate(`/pdp/${id}`)

        // console.log("productId", id)
    }


    // 1. Fetch all products from API
    useEffect(() => {
        // const controller = new AbortController();

        async function fetchProductData() {
            try {
                setLoading(true);
                setError('');

                const response = await fetch(
                    'http://localhost:3001/products'
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const responseData = await response.json();
                setApiproducts(responseData);

            } catch (error) {
                // if (error.name !== 'AbortError') {
                setError(error.message);
                // }
            } finally {
                // if (!controller.signal.aborted) {
                setLoading(false);
                // }                 
            }
        }

        fetchProductData();

        // return () => controller.abort();
    }, []);

    // 2. Filter products
    const filteredProducts =
        !categoryKeyword ||
            categoryKeyword === 'Reset' ||
            categoryKeyword === 'All'
            ? apiproducts
            : apiproducts.filter(
                (item) => item.collection === categoryKeyword
            );

    //Search product

    const searchData = apiproducts.filter((items) => items.name.toLowerCase().includes(search.toLowerCase()))

    // 3. Loading and error handling
    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }
    // 4. Display products


    return (
        <div
            className="Product_list_page_Main"
            data-component="plp-component"
        >
            <h1>Product Lists</h1>

            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="plp_lists">
                    {(search.trim() ? searchData : filteredProducts).map((item) => (
                        <div
                            className="plp_list_child"
                            key={item.id}
                            onClick={() => handleClickProductById(item.id)}
                            id="hdjhdj"
                            datai-id="hjhj"
                        >
                            <div className="plp_list_child__image">
                                <img
                                    src={item.image}
                                    alt={item.alt || item.name}
                                />
                            </div>

                            <div className="plp_list_child__details">
                                <p>{item.name}</p>
                                <p>${item.price}</p>

                                <h3 className={item.availability === 'In Stock' ? 'in-stock' : 'out-of-stock'}>{item.availability}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Product_List_Page;
