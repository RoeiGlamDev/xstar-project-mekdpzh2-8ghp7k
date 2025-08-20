import { useEffect, useState } from 'react';

// Utility function to fetch data from an API
export const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Custom hook to manage form input
export const useFormInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
};

// Function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
};

// Function to validate email format
export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Default export for utility functions
export default {
    fetchData,
    useFormInput,
    formatCurrency,
    validateEmail,
};