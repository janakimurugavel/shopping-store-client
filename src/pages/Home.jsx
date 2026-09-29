import ProductCard from "../components/ProductCard";
function Home() {
    const storeName = "JanuShop";
    const productCount = 3;


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
                <ProductCard
                    name="iPhone"
                    price={70000}
                    stock={10}
                    image="/iphone.webp"
                />
                <ProductCard
                    name="Laptop"
                    price={55000}
                    stock={5}
                    image="/laptop.webp"
                />
                <ProductCard
                    name="Headphones"
                    price={3000}
                    stock={0}
                    image="/headphone.webp"
                />
            </div>
        </section>
    );
}


export default Home;