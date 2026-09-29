function ProductCard({ name, price, stock, image, onAddToCart }) {
    return (
        <article className="product-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p >Price : ₹{price}</p>
            <p>In Stock: {stock}</p>

            {stock > 0 ? (
                <button className="primary-button" type="button" onClick={() => onAddToCart(name)}>
                    Add to Cart
                </button>
            ) : (
                <p className="out-of-stock">Out of Stock</p>
            )}
        </article>
    )
}

export default ProductCard;