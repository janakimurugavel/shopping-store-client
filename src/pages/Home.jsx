import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/productService";

function Home() {
    const storeName = "JanuShop";
    const productCount = 3;
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    function handleAddToCart(productId) {
        const selectedProduct = products.find((product) => product._id === productId);
        if (!selectedProduct || selectedProduct.stock <= 0) {
            console.log("Product is out of stock or not found.");
            return;
        }
        setCartCount((cartCount) => cartCount + 1);
        console.log(`${selectedProduct.name} added to cart. Total items in cart: ${cartCount + 1}`);
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product._id === productId ? { ...product, stock: product.stock - 1 } : product
            )
        );
    }

    async function getProducts() {
        try {
            setLoading(true);
            setError("");

            const productData = await getAllProducts();


            setProducts(productData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section className="hero">
            <p className="hero-label">WELCOME to {storeName}!</p>

            <h1>Featured Products</h1>

            <p>
                we have {productCount} products available for you to explore.
            </p>
            <p> cart items: {cartCount}</p>
            <button className="primary-button" type="button">
                Explore Products
            </button>
            {loading && <p>Products are loading...</p>}

            {error && <p className="error-message">{error}</p>}

            {
                !loading && !error && products.length === 0 && (
                    <p>No products found.</p>
                )
            }

            {!loading && !error && (
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            stock={product.stock}
                            image={product.image}
                            onAddToCart={() => handleAddToCart(product._id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Home;