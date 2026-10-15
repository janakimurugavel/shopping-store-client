const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export async function getAllProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    const result = await response.json();
    if (!response.ok) {
        throw new Error("Could not fetch products");
    }
    return result.data;
}