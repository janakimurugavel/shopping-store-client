import apiClient from './apiClient';

export async function getCartItems() {
    const response = await apiClient.get('/cart');
    return response.data.data;
}