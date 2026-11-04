import apiClient from "./apiClient.js";

// export async function getAllProducts() {
//     const result = await apiFetch("/products");

//     return result.data;
// }

export async function getAllProducts() {
    const response = await apiClient.get("/products");

    return response.data.data;
}