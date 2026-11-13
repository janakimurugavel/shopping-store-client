import { useEffect, useState } from "react";
import { getCartItems } from "../services/cartService";

function Cart() {
    const [cart, setCart] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadCart() {
            try {
                const cartData = await getCartItems();
                setCart(cartData);
            } catch (error) {
                setError(error.message);
            }
        }

        loadCart();
    }, []);

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!cart) {
        return <p>Loading cart...</p>;
    }

    return (
        <section>
            <h1>My Cart</h1>

            {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.items.map((item) => (
                    <p key={item.productId._id}>
                        {item.productId.name} — Quantity: {item.quantity}
                    </p>
                ))
            )}
        </section>
    );
}

export default Cart;