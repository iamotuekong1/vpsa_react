import React, { useEffect, useState } from 'react';
import { getProducts, getRecommendations } from '../services/api';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.data.products);
        };

        const fetchRecommendations = async () => {
            const userId = 1; // Replace with dynamic user ID from logged-in user
            const response = await getRecommendations(userId);
            setRecommendations(response.data.recommendations);
        };

        fetchProducts();
        fetchRecommendations();
    }, []);

    return (
        <div>
            <h2>Product Recommendations</h2>
            <ul>
                {recommendations.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>
            <h2>All Products</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
