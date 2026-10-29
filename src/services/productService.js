import { apiFetch } from "./apiClient.js";

export async function getAllProducts() {
    const result = await apiFetch("/products");

    return result.data;
}