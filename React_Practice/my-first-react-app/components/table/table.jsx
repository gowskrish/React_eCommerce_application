import { useEffect, useState } from "react";
import "./table.css";

function ProductTable() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("http://localhost:3000/products");

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error("The products response was not a list.");
                }

                setProducts(data);
            } catch (fetchError) {
                setError(fetchError.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <section className="product-table-section" aria-labelledby="product-table-title">
            <h2 id="product-table-title">Products</h2>

            {loading && <p role="status">Loading products...</p>}
            {!loading && error && (
                <p className="product-table-error" role="alert">
                    Could not load products: {error}. Start the API with <code>npm run server</code>.
                </p>
            )}
            {!loading && !error && products.length === 0 && (
                <p>No products found.</p>
            )}
            {!loading && !error && products.length > 0 && (
                <div className="product-table-scroll">
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Product</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>${Number(product.price).toFixed(2)}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.rating}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default ProductTable;