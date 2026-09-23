import useState from "react";
import ProductCard from "../components/ProductCard";
function Home() {
    const storeName = "JanuShop";
    const productCount = 3;
    const [cartCount, setCartCount] = useState(0);
    const products = [
        {
            id: 1,
            name: "iPhone",
            price: 70000,
            stock: 10,
            image: "/iphone.webp"
        },
        {
            id: 2,
            name: "Laptop",
            price: 55000,
            stock: 5,
            image: "/laptop.webp"
        },
        {
            id: 3,
            name: "Headphones",
            price: 3000,
            stock: 0,
            image: "/headphone.webp"
        },
        {
            id: 4,
            name: "Smart Watch",
            price: 3000,
            stock: 10,
            image: "/smart-watch.webp"
        }
    ]
   function handleAddToCart() {
    
   }
    return (
        <section className="hero">
            <p className="hero-label">WELCOME to {storeName}!</p>

            <h1>Featured Products</h1>

            <p>
                we have {productCount} products available for you to explore.
            </p>

            <button className="primary-button" type="button">
                Explore Products
            </button>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        stock={product.stock}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
}

export default Home;