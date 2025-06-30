import { useState, useCallback } from 'react';

const useLoading = (initialState = false) => {
    const [isLoading, setIsLoading] = useState(initialState);
    const [loadingMessage, setLoadingMessage] = useState("Memuat...");

    const startLoading = useCallback((message = "Memuat...") => {
        setLoadingMessage(message);
        setIsLoading(true);
    }, []);

    const stopLoading = useCallback(() => {
        setIsLoading(false);
        setLoadingMessage("Memuat...");
    }, []);

    const withLoading = useCallback(async (asyncFunction, message = "Memuat...") => {
        try {
            startLoading(message);
            const result = await asyncFunction();
            return result;
        } finally {
            stopLoading();
        }
    }, [startLoading, stopLoading]);

    return {
        isLoading,
        loadingMessage,
        startLoading,
        stopLoading,
        withLoading
    };
};

export default useLoading; 