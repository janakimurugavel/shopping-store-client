import { apiFetch } from "./apiClient";

export function registerUser(userData) {
    return apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
    });
}
export async function loginUser(credentials) {
    const response = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
    });
    console.log("Login response:", response); // Log the response for debugging
    return response;
}