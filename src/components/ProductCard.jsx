const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("API BASE URL:", API_BASE_URL);
function ProductCard({ name, price, stock, image, onAddToCart }) {
    return (
        <article className="product-card">
            <img src={`${API_BASE_URL}${image}`} alt={name} />
            <h2>{name}</h2>
            <p >Price : ₹{price}</p>
            <p>In Stock: {stock}</p>

            {stock > 0 ? (
                <button
                    className="primary-button"
                    type="button"
                    onClick={onAddToCart}
                >
                    Add to Cart
                </button>
            ) : (
                <p className="out-of-stock">Out of Stock</p>
            )}
        </article>
    )
}

export default ProductCard;