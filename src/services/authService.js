import apiClient from "./apiClient";

// export function registerUser(userData) {
//     return apiFetch("/auth/register", {
//         method: "POST",
//         body: JSON.stringify(userData),
//     });
// }
export async function registerUser(userData) {
    const response = await apiClient.post("/auth/register", userData);

    return response.data;
}
export async function loginUser(credentials) {
    const response = await apiClient.post("/auth/login", credentials);
    console.log("Login response:", response); // Log the response for debugging
    return response.data;
}