const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });

    const result = await response.text();
    const resultData = result ? JSON.parse(result) : {};

    if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
    }

    return resultData;
}